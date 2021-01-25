import { Order } from '../domain/model';


export interface OrderRepository {
    findById(id: string): Promise<Order>;

}

export class MongoOrderRepository implements OrderRepository {
    findById(id: string): Promise<Order> {
        throw new Error("Method not implemented.");
    }

}

