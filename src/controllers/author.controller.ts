import { Author } from '../entity/Author';
import { getConnection, Repository } from 'typeorm';
import { Request, Response } from 'express';

let repository: Repository<Author>;

const initialize = () => {
  const connection = getConnection();
  repository = connection.getRepository(Author);
};

export async function getAuthors(req: Request, res: Response): Promise<Response> {
  if(!repository) initialize();
  const authors = await repository.find({relations: ['posts','user']});
  return res.json({
    data: authors
  });
}

export async function getAuthor(req: Request, res: Response): Promise<Response> {
  if(!repository) initialize();
  const id: number = +req.params.id;
  const author = await repository.findOne(id,{relations:['posts','user']});
  return res.json({
    data: author
  });
}

export async function createAuthor(req: Request, res: Response): Promise<Response> {
  if(!repository) initialize();
  const newAuthor: Author = req.body;
  newAuthor.user = req.body.userId;
  await repository.save(newAuthor);
  return res.json({
    message: 'Author successfully added!',
    data: newAuthor
  });
}

export async function updateAuthor(req: Request, res: Response): Promise<Response> {
  if(!repository) initialize();
  const author: Author = req.body;
  const id: number = +req.params.id;
  await repository.update(id, author);
  return res.json({
    message: 'Author successfully updated!',
    data: author
  });
}

export async function deleteAuthor(req: Request, res: Response): Promise<Response> {
  if(!repository) initialize();
  const id: number = +req.params.id;
  await repository.delete(id);
  return res.json({
    message: 'Author successfully deleted!'
  });
}