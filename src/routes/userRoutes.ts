import { Router } from 'express';
import controller from '../controllers/userController';

const router = Router();

router.get('/groceries', controller.list);
router.post('/order', controller.placeOrder);

export default router;