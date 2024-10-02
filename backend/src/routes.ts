import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify"
import { CreatMovieController } from "./controllers/CreatMovieController"
import { ListMoviesController } from "./controllers/ListMoviesController"
import { DeleteMovieControler } from "./controllers/DeleteMovieControler"

export async function routes(fastify: FastifyInstance)
{
    fastify.post("/movie", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreatMovieController().handle(request, reply)
    })

    fastify.get("/movies", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListMoviesController().handle(request, reply)
    })

    fastify.delete("/movie", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteMovieControler().handle(request, reply)
    })
}