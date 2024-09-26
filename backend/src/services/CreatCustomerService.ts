import prismaClient from "../prisma";

class CreatCustomerService
{
    async execute()
    {
        console.log("ROTA FOI CHAMADA")

        return { ok: true }
    }
}

export { CreatCustomerService }