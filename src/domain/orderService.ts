import { OrderRepository } from "../infrastructure/orderRepository";
import { Order } from '../domain/model';

export interface OrderService {
    orderRepository: OrderRepository;
    findById(id: string): Promise<Order>;

}


export class OrderServiceImplementation implements OrderService {
    orderRepository: OrderRepository;
    constructor(repo: OrderRepository) {
        this.orderRepository = repo;
    }
    findById(id: string): Promise<Order> {
        var order: Order;
        order = new Order(id);
        return new Promise<Order>((resolve) => {
            resolve(order);
        });
    }

}