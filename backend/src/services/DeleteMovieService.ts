import prismaClient from "../prisma";

interface DeleteMovieProps
{
    id: string;
}

class DeleteMovieService
{
    async execute({ id }: DeleteMovieProps)
    {
        if (!id)
        {
            throw new Error("Soliciatação inválida")
        }

        const findMovie = await prismaClient.movie.findFirst({
            where:
            {
                id: id
            }
        })

        if(!findMovie)
        {
            throw new Error("Filme não existe!")
        }

        await prismaClient.movie.delete({
            where:
            {
                id: findMovie.id
            }
        })

        return { message: "Deletado com sucesso!" }
    }
}

export { DeleteMovieService }