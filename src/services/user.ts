import type { Prisma } from "../../generated/prisma/client.js"
import { prisma } from "../../lib/prisma.js"
import express from "express"

export const createUser = async (data: Prisma.UserCreateInput) => {
     try {
          const user = await prisma.user.create({data})
          return user
     } catch (error) {
          return false
     }
}

/* export const editUser = async () => {
     try {
          const user = await prisma.user.update({
               data: 
          })
     }
} */