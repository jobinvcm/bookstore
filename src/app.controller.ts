import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { BookService } from './books/books.service';
import { BooksDTO } from './books/books.dto';
import { QueryDto } from './dto/queryDto';
import { Response } from 'express';
import { IBook } from './books/IBook';

@Controller()
export class AppController {
  constructor(private readonly bookService: BookService) {}

  @Get('book')
  getBooks(@Query() querydto: QueryDto): { books: Array<IBook> } {
    return this.bookService.getBooks(
      querydto.sortBy,
      querydto.asc,
      querydto.search,
    );
  }

  @Post('book')
  addBook(@Body() booksDto: BooksDTO, @Res() res: Response) {
    const result = this.bookService.addBook(booksDto);
    if (result.status === 200) {
      res.status(HttpStatus.OK).send();
    }

    res.statusMessage = result.message;
    res.status(HttpStatus.BAD_REQUEST).send({ message: 'bad request' });
  }
}
