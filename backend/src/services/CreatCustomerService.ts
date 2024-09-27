import prismaClient from "../prisma";

interface CreatCustomerProps
{
    name: string;
    email: string;
}

class CreatCustomerService
{
    async execute({ name, email}: CreatCustomerProps)
    {
        if (!name || !email)
        {
            throw new Error("Prencha todos os campos")
        }

        const customer = await prismaClient.customer.create({
            data:
            {
                name,
                email,
                status: true
            }
        })

        return customer
    }
}

export { CreatCustomerService }