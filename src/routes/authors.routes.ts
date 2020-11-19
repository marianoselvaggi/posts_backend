import { getAuthor, getAuthors, createAuthor, updateAuthor, deleteAuthor } from '../controllers/author.controller';
import { Router } from 'express';
const router = Router();

router.route('/')
  .get(getAuthors)
  .post(createAuthor);

router.route('/:id')
  .put(updateAuthor)
  .delete(deleteAuthor)
  .get(getAuthor);

export default router;