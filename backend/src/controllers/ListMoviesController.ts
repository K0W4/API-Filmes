import { FastifyRequest, FastifyReply } from "fastify";
import { ListMoviesService } from "../services/ListMoviesService"

class ListMoviesController
{
    async handle(request: FastifyRequest, reply: FastifyReply)
    {
        const listMoviesService = new ListMoviesService;

        const movies = await listMoviesService.execute();

        reply.send(movies);
    }
}

export { ListMoviesController }