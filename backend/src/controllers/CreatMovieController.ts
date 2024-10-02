import { FastifyRequest, FastifyReply } from "fastify";
import { CreatMovieService } from "../services/CreatMovieService"

class CreatMovieController
{
    async handle(request: FastifyRequest, reply: FastifyReply)
    {
        const { name, evaluation, rating  } = request.body as { name: string, evaluation: string, rating: string };

        const movieService = new CreatMovieService
        const movie = await movieService.execute({ name, evaluation, rating });

        reply.send(movie);
    }
}

export { CreatMovieController }