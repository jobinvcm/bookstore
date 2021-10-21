import { Module } from '@nestjs/common';
import { BookService } from './books.service';

@Module({
  providers: [BookService],
  exports: [BookService],
})
export class BooksModule {}
