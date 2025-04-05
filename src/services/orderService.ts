import orderModel, { OrderItem } from '../models/orderModel';

export default {
  createOrder: (items: OrderItem[]) => orderModel.createOrder(items),
}