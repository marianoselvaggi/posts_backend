import { Author } from '../entity/Author';
import { getConnection, Repository } from 'typeorm';

const createAuthor = async () => {
  const connection = getConnection();
  const repository:Repository<Author> = connection.getRepository(Author);
  const author = new Author();
  author.firstName = 'Test Author';
  author.lastName = 'Test Author';
  await repository.save(author);
  return author;
};

export {
  createAuthor
};