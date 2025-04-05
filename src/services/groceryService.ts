import Grocery, { GroceryItem } from '../models/groceryModel';

export default {
  getAllGroceries: () => Grocery.getAll(),
  addGrocery: (data: GroceryItem) => Grocery.add(data),
  updateGrocery: (id: number, data: GroceryItem) => Grocery.update(id, data),
  deleteGrocery: (id: number) => Grocery.delete(id),
  updateInventory: (id: number, quantity: number) => Grocery.updateQuantity(id, quantity),
};