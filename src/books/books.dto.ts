import { IsNotEmpty } from 'class-validator';

export class BooksDTO {
  id: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  author: string;

  @IsNotEmpty()
  description: string;
}
