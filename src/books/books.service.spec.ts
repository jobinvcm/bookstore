import { Test, TestingModule } from '@nestjs/testing';
import { BookService } from './books.service';

describe('Post Controller', () => {
  let service: BookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookService],
    }).compile();

    service = module.get<BookService>(BookService);
  });

  describe('check book name exists', () => {
    it('exist', async () => {
      expect(await service.checkBookExists('New Author')).toBe(false);
    });
    it('does not exist', async () => {
      expect(
        await service.checkBookExists(
          `Harry Potter and the Philosopher's Stone`,
        ),
      ).toBe(true);
    });
  });

  describe('Books length', () => {
    it('to be 3', async () => {
      expect(await service.getBooks('author', true, '').books.length).toBe(3);
    });
    it('to be 4', async () => {
      await service.addBook({
        name: 'new Name',
        author: 'new Author',
        description: 'new Description',
      });
      expect(await service.getBooks('author', true, '').books.length).toBe(4);
    });
  });
});
