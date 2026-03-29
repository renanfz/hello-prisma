import { prisma } from "../../lib/prisma.js"
import express from "express"

type CreateUserProps = {
  name: string
  email: string
  uf: string
}

export const createUser = async ({ name, email, uf }: CreateUserProps) => {
     try {
          const user = await prisma.user.create({
            data: { name, email, uf}
          })
          return user
     } catch (error) {
          return false
     }
}
