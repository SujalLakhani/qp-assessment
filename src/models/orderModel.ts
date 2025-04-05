import db from '../config/db';

export interface OrderItem {
  grocery_id: number;
  quantity: number;
}

const Order = {
  createOrder: async (items: OrderItem[]) => {
    const client = await db.connect();
    try {
      await client.query('BEGIN');

      for (const item of items) {
        const grocery = await client.query('SELECT quantity FROM groceries WHERE id = $1', [item.grocery_id]);

        if (!grocery.rows[0]) throw new Error('Item not found');

        const available = grocery.rows[0].quantity;
        if (available < item.quantity) throw new Error('Insufficient stock');

        await client.query('UPDATE groceries SET quantity = quantity - $1 WHERE id = $2', [item.quantity, item.grocery_id]);
      }

      const result = await client.query('INSERT INTO orders DEFAULT VALUES RETURNING id');
      const orderId = result.rows[0].id;

      for (const item of items) {
        await client.query('INSERT INTO order_items (order_id, grocery_id, quantity) VALUES ($1, $2, $3)', [orderId, item.grocery_id, item.quantity]);
      }

      await client.query('COMMIT');
      return { orderId };
    } catch (err) {
      await client.query('ROLLBACK');
      throw err;
    } finally {
      client.release();
    }
  }
};

export default Order;