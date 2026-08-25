import Router from 'express';
import { AdminController } from '../controller/adminController.js';

const router = Router();

router.get('/', AdminController.teste);

export default router;