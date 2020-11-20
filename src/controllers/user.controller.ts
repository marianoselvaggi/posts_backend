import { User } from '../entity/User';
import { getConnection, Repository } from 'typeorm';
import { Request, Response } from 'express';

let repository: Repository<User>;

const initialize = () => {
  const connection = getConnection();
  repository = connection.getRepository(User);
};

export async function getUsers(req: Request, res: Response): Promise<Response> {
  if(!repository) initialize();
  const users = await repository.find();
  return res.json({
    data: users
  });
}

export async function getUser(req: Request, res: Response): Promise<Response> {
  if(!repository) initialize();
  const id: number = +req.params.id;
  const user = await repository.findOne(id);
  return res.json({
    data: user
  });
}

export async function createUser(req: Request, res: Response): Promise<Response> {
  if(!repository) initialize();
  const newUser: User = req.body;
  await repository.save(newUser);
  return res.json({
    message: 'User successfully added!',
    data: newUser
  });
}

export async function updateUser(req: Request, res: Response): Promise<Response> {
  if(!repository) initialize();
  const user: User = req.body;
  const id: number = +req.params.id;
  await repository.update(id, user);
  return res.json({
    message: 'User successfully updated!',
    data: user
  });
}

export async function deleteUser(req: Request, res: Response): Promise<Response> {
  if(!repository) initialize();
  const id: number = +req.params.id;
  await repository.delete(id);
  return res.json({
    message: 'User successfully deleted!'
  });
}