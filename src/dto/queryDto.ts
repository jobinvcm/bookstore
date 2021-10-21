import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';

export class QueryDto {
  @IsOptional()
  @IsIn(['author', 'name'])
  sortBy: 'author' | 'name';

  @IsOptional()
  @IsIn([0, 1, '0', '1', 'True', 'False', 'true', 'false', true, false])
  asc: number | boolean | string;

  @IsOptional()
  search: string;
}
