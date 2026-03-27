import { Router } from 'express';
import { prisma } from "";

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

mainRouter.post('/user', async (req, res) => {
    const user = await prisma.user.create({
        data: {
            name: 'Renan',
            email: 'renanfsouza@gmail.com',
            role: 'ADMIN',
            uf: 'MG'
        }
    })

    res.json({ user })
})