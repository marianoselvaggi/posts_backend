import { welcome } from '../controllers/index.controller';
import { Router } from 'express';
const router = Router();

router.get('/', welcome);

export default router;