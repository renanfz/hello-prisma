import { Router } from 'express';
import { createUser } from '../services/user.js';
import { use } from 'react';
import { error } from 'node:console';
import { prisma } from '../../lib/prisma.js';
import { sql } from '../../generated/prisma/internal/prismaNamespace.js';
import { Sql } from '@prisma/client/runtime/client';
export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

mainRouter.post('/user', async (req, res) => {
    const dados = (['Severini', 'vanderlei@gmamil.com', 'mg'])

    const user = await createUser({ 
        name: dados[0]!,
        email: dados[1]!,
        uf: dados[2]!,
    })
    if (user) {
        res.status(201).json({user})
    } else {
        res.status(500).json({error: 'E-mail inválido'})
    }
})

mainRouter.get('/list-users', async (req, res) => {

})