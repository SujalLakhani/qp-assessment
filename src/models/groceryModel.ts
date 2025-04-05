import db from '../config/db';

export interface GroceryItem {
    name: string;
    price: number;
    quantity: number;
  }
  
  const Grocery = {
    getAll: () => db.query('SELECT * FROM groceries'),
    getById: (id: number) => db.query('SELECT * FROM groceries WHERE id = $1', [id]),
    add: ({ name, price, quantity }: GroceryItem) => db.query(
      'INSERT INTO groceries (name, price, quantity) VALUES ($1, $2, $3)',
      [name, price, quantity]
    ),
    update: (id: number, { name, price, quantity }: GroceryItem) => db.query(
      'UPDATE groceries SET name = $1, price = $2, quantity = $3 WHERE id = $4',
      [name, price, quantity, id]
    ),
    delete: (id: number) => db.query('DELETE FROM groceries WHERE id = $1', [id]),
    updateQuantity: (id: number, quantity: number) => db.query(
      'UPDATE groceries SET quantity = $1 WHERE id = $2',
      [quantity, id]
    )
  };
  
  export default Grocery;
  