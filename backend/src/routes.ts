import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify"
import { CreatCustomerController } from "./controllers/CreatCustomerController"
import { ListCustomersController } from "./controllers/ListCustomersController"
import { DeleteCustomerControler } from "./controllers/DeleteCustomerControler"

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions)
{
    fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreatCustomerController().handle(request, reply)
    })

    fastify.get("/customers", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListCustomersController().handle(request, reply)
    })

    fastify.delete("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteCustomerControler().handle(request, reply)
    })
}