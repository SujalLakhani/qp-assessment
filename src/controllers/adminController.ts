import { Request, Response } from 'express';
import groceryService from '../services/groceryService';

export default {
  add: async (req: Request, res: Response) => {
    const result = await groceryService.addGrocery(req.body);
    res.json({ message: 'Item added', data: result.rows });
  },
  view: async (_req: Request, res: Response) => {
    const result = await groceryService.getAllGroceries();
    res.json(result.rows);
  },
  update: async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const result = await groceryService.updateGrocery(id, req.body);
    res.json({ message: 'Item updated', data: result.rows });
  },
  remove: async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    await groceryService.deleteGrocery(id);
    res.json({ message: 'Item deleted' });
  },
  updateInventory: async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const quantity = req.body.quantity;
    const result = await groceryService.updateInventory(id, quantity);
    res.json({ message: 'Inventory updated', data: result.rows });
  }
};