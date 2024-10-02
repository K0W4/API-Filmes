import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteMovieService } from '../services/DeleteMovieService'

class DeleteMovieControler
{
    async handle(request: FastifyRequest, reply: FastifyReply)
    {
        const { id } = request.query as { id: string }
        
        const movieService = new DeleteMovieService;
        
        const movie = await movieService.execute({ id })
        
        reply.send(movie);
    }
}

export { DeleteMovieControler }