import { Response, Request } from 'express';
import { Post } from '../entity/Post';
import { getConnection, Repository } from 'typeorm';

let repository: Repository<Post>;

const initialize = () => {
  const connection = getConnection();
  repository = connection.getRepository(Post);
};

export async function getPosts(req: Request, res: Response): Promise<Response> {
  if(!repository) initialize();
  const posts = await repository.find({relations: ['author']});
  return res.json({
    data: posts
  });  
}

export async function createPost(req: Request, res: Response): Promise<Response> {
  if(!repository) initialize();

  try {
    const post: Post = req.body;
    // post.author = new Author();
    post.author = req.body.authorId;
    await repository.save(post);
    return res.json({
      message: 'Post successfully added!',
      data: post
    });
  } catch(err) {
    return res.status(500).json({
      error: err
    });
  }
}

export async function getPost(req: Request, res: Response): Promise<Response> {
  if(!repository) initialize();

  const id:number = +req.params.id;
  const post = await repository.findOne(id);
  return res.json({
    data: post
  });
}

export async function updatePost(req: Request, res: Response): Promise<Response> {
  if(!repository) initialize();
  
  const postUpdate: Post = req.body;
  const id:number = +req.params.id;
  await repository.update({id}, postUpdate);
  return res.json({
    message: 'Post successfully updated!'
  });
}

export async function deletePost(req: Request, res: Response): Promise<Response> {
  if(!repository) initialize();

  const id:number = +req.params.id;
  await repository.delete(id);
  return res.json({
    message: 'Post successfully deleted!'
  });
}