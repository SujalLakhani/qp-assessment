import { Request, Response } from 'express';
import groceryService from '../services/groceryService';
import orderService from '../services/orderService';

export default {
  list: async (_req: Request, res: Response) => {
    const result = await groceryService.getAllGroceries();
    res.json(result.rows);
  },
  placeOrder: async (req: Request, res: Response) => {
    try {
      const result = await orderService.createOrder(req.body.items);
      res.json({ message: 'Order placed successfully', orderId: result.orderId });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
};
