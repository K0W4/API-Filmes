import prismaClient from "../prisma";

class ListMoviesService
{
    async execute()
    {
        const movies = await prismaClient.movie.findMany()

        return movies;
    }
}

export { ListMoviesService }