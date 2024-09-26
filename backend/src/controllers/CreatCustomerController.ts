import { FastifyRequest, FastifyReply } from "fastify";
import { CreatCustomerService } from "../services/CreatCustomerService"

class CreatCustomerController
{
    async handle(request: FastifyRequest, reply: FastifyReply)
    {
        const customerService = new CreatCustomerService

        const customer = await customerService.execute();

        reply.send(customer);
    }
}

export { CreatCustomerController }