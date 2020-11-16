import { getPosts, createPost, updatePost, deletePost, getPost } from '../controllers/posts.controller';
import { Router } from 'express';
const router = Router();

router.route('/')
  .get(getPosts)
  .post(createPost);

router.route('/:id')
  .put(updatePost)
  .delete(deletePost)
  .get(getPost);

export default router;