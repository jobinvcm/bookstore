export interface IBook {
  id: string;
  name: string;
  author: string;
  description: string;
  timestamp: string;
}

export interface IBookDto {
  name: string;
  author: string;
  description: string;
}
