import { OrderServiceImplementation as OrderService } from './domain/orderService';
import { MongoOrderRepository } from './infrastructure/orderRepository';
import { HttpAdaptor } from './application/httpAdaptor';
import { AbstractAdaptor } from './application/abstractAdaptor';
import { RabbitMQAdaptor } from './application/rabbitMQAdaptor';

const orderRepository = new MongoOrderRepository();
const orderService = new OrderService(orderRepository);


let adaptors: Array<AbstractAdaptor> = new Array();

const httpEnabled = true;

const amqpEnabled = true;

if (httpEnabled) {
    const httpAdaptor = new HttpAdaptor(orderService);
    adaptors.push(httpAdaptor);
}

if (amqpEnabled) {
    const amqpAdaptor = new RabbitMQAdaptor(orderService);
    adaptors.push(amqpAdaptor);
}



function startApp(adaptors: Array<AbstractAdaptor>) {
    adaptors.forEach(a => {
        a.start();

    });

}
startApp(adaptors);