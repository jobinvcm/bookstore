import { Injectable } from '@nestjs/common';
import initialBooks from './book.mock';
import { IBook, IBookDto } from './IBook';

@Injectable()
export class BookService {
  private currentBooks: Array<IBook>;

  constructor() {
    this.currentBooks = initialBooks;
  }

  simpleSearch(weirdPattern: string, book: IBook) {
    const pattern = '.*' + weirdPattern.split('').join('.*') + '.*';
    const re = new RegExp(pattern.toLowerCase());
    return re.test(book.name.toLowerCase());
  }

  getBooks(
    sortBy: 'author' | 'name' | '',
    asc: number | boolean | string,
    search = '',
  ): { books: Array<IBook> } {
    const books = [...this.currentBooks];
    if (asc !== undefined && sortBy) {
      books.sort((a, b): number => {
        const retOrder =
          a[sortBy].toUpperCase() < b[sortBy].toUpperCase() ? 1 : -1;

        return ['True', 'true', 0, true].findIndex((i) => i === asc) === -1
          ? retOrder
          : -1 * retOrder;
      });
    }

    const searchedBooks = books.filter((bookItem) =>
      this.simpleSearch(search, bookItem),
    );
    return {
      books: [...searchedBooks],
    };
  }

  checkBookExists(name: string): boolean {
    return !!this.currentBooks.find(
      (b: IBook) => b.name.toUpperCase() === name.toUpperCase(),
    );
  }

  generateId(name: string): string {
    return (
      new Date().getTime().toString() + name.toLowerCase().split(' ').join('_')
    );
  }

  addBook(book: IBookDto): { message: string; status: number } {
    if (!this.checkBookExists(book.name)) {
      this.currentBooks.push({
        ...book,
        id: this.generateId(book.name),
        timestamp: new Date().getTime().toString(),
      });
      return { message: '', status: 200 };
    }

    return { message: 'unprocessable entity', status: 400 };
  }
}
