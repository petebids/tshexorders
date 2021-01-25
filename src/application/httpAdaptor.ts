import express from 'express';
import { OrderService } from '../domain/orderService';
import { AbstractAdaptor } from './abstractAdaptor';

/**
 * rest http entry point
 * */


export class HttpAdaptor implements AbstractAdaptor {
    orderService: OrderService;

    constructor(orderService: OrderService) {
        this.orderService = orderService;
    }



    start() {
        const port = "8080";
        const app = express();

        // wire up http endpoints to service calls

        // get by id 
        app.get('/order/:id', this.getById)
        // create
        app.post('/order', this.createOrder)
        // start http server
        app.listen(port, () => {
            console.log(`server started at http://localhost:${port}`);
        });

    }

    async getById(req: express.Request, resp: express.Response) {
        var id: string;
        try {
            id = req.params["id"];
            var order = await this.orderService.findById(id);
            if (order == null) {
                resp.status(404).send();
            }
            resp.status(200).send(order);
        }
        catch (e) {
            resp.status(500).send();
        }
    }

    async createOrder(req: express.Request, resp: express.Response) {
        console.log(req)
        console.log(resp)
    }
}