import { Response, Request } from 'express';
import { connect } from '../database';
import { Post } from '../interfaces/post.interface';
// import { ResultSetHeader } from 'mysql2';

export async function getPosts(req: Request, res: Response): Promise<Response> {
  const conn = await connect();
  const posts = await conn.query('Select * from post');
  return res.json({
    data: posts[0]
  });
}

export async function createPost(req: Request, res: Response): Promise<Response> {
  const post: Post = req.body;
  const conn = await connect();
  const result: any = await conn.query('Insert into post SET ?', post);
  return res.json({
    message: 'Post successfully added!',
    data: result[0]['insertId']
  });
}

export async function getPost(req: Request, res: Response): Promise<Response> {
  const conn = await connect();
  const id:number = +req.params.id;
  const post = await conn.query('select * from post WHERE id = ?', [ id ]);
  return res.json({
    data: post[0]
  });
}


export async function updatePost(req: Request, res: Response): Promise<Response> {
  const post: Post = req.body;
  const conn = await connect();
  const id:number = +req.params.id;
  await conn.query('Update post SET ? WHERE id = ?', [ post,id ]);
  return res.json({
    message: 'Post successfully updated!'
  });
}

export async function deletePost(req: Request, res: Response): Promise<Response> {
  const conn = await connect();
  const id:number = +req.params.id;
  await conn.query('delete from post WHERE id = ?', [ id ]);
  return res.json({
    message: 'Post successfully deleted!'
  });
}