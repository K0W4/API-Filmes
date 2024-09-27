import { FastifyRequest, FastifyReply } from "fastify";
import { CreatCustomerService } from "../services/CreatCustomerService"

class CreatCustomerController
{
    async handle(request: FastifyRequest, reply: FastifyReply)
    {
        const { name, email } = request.body as { name: string, email: string };

        const customerService = new CreatCustomerService
        const customer = await customerService.execute({ name, email });

        reply.send(customer);
    }
}

export { CreatCustomerController }