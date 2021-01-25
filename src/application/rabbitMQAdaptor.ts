import { OrderService } from "../domain/orderService";
import { AbstractAdaptor } from "./abstractAdaptor";
import * as AMQP from "amqp-ts";

/** 
 * 
*/
export class RabbitMQAdaptor implements AbstractAdaptor {
    orderService: OrderService
    constructor(orderService: OrderService) {
        this.orderService = orderService;
    }
    start(): void {
        console.log("starting amqp adaptor");
        var connection = new AMQP.Connection("amqp://localhost");
        var exchange = connection.declareExchange("orderexchange")
        var queue = connection.declareQueue("createorder");
        queue.bind(exchange);
        queue.activateConsumer((message: AMQP.Message) => {
            console.log(message)
        })
    }

}