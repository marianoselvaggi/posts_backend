import { Author } from '../entity/Author';
import { User } from '../entity/User';
import { getConnection, Repository } from 'typeorm';

const createUser = async () => {
  const connection = getConnection();
  const repository = connection.getRepository(User);
  const user = new User();
  user.nickName = 'User mocked';
  user.age = 40;
  await repository.save(user);
  return user;
};

const createAuthor = async () => {
  const connection = getConnection();
  const repository:Repository<Author> = connection.getRepository(Author);
  const author = new Author();
  author.firstName = 'Test Author';
  author.lastName = 'Test Author';
  author.user = await createUser();
  await repository.save(author);
  return author;
};

export {
  createAuthor,
  createUser
};