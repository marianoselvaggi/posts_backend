import { getUser, getUsers, createUser, updateUser, deleteUser } from '../controllers/User.controller';
import { Router } from 'express';
const router = Router();

router.route('/')
  .get(getUsers)
  .post(createUser);

router.route('/:id')
  .put(updateUser)
  .delete(deleteUser)
  .get(getUser);

export default router;