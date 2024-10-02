import prismaClient from "../prisma";

interface CreatMovieProps
{
    name: string;
    evaluation: string;
    rating: string;
}

class CreatMovieService
{
    async execute({ name, evaluation, rating}: CreatMovieProps)
    {
        if (!name || !evaluation || !rating)
        {
            throw new Error("Prencha todos os campos")
        }

        const movie = await prismaClient.movie.create({
            data:
            {
                name,
                evaluation,
                rating
            }
        })

        return movie;
    }
}

export { CreatMovieService }