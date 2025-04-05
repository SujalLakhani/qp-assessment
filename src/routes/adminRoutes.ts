import { Router } from 'express';
import controller from '../controllers/adminController';

const router = Router();

router.post('/add', controller.add);
router.get('/view', controller.view);
router.put('/update/:id', controller.update);
router.delete('/remove/:id', controller.remove);
router.patch('/inventory/:id', controller.updateInventory);

export default router;
