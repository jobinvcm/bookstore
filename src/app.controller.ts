import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { AppService } from './app.service';
import { BookService } from './books/books.service';
import { BooksDTO } from './books/books.dto';
import { QueryDto } from './dto/queryDto';
import { Response } from 'express';
import { IBook } from './books/IBook';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly bookService: BookService,
  ) {}

  @Get('book')
  getBooks(@Query() querydto: QueryDto): { books: Array<IBook>} {
    return this.bookService.getBooks(
      querydto.sortBy,
      querydto.asc,
      querydto.search,
    );
  }

  @Post('book')
  addBook(@Body() booksDto: BooksDTO, @Res() res: Response) {
    const result = this.bookService.addBook(booksDto);
    if (result.status === 400) {
      res.statusMessage = result.message;
      res.status(HttpStatus.BAD_REQUEST).send();
    }

    res.status(HttpStatus.OK).send();
  }
}
