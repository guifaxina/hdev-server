import { User } from "@prisma/client"
import prisma from "../utils/prismaConnect.js"

class UserRepository {
  public createUser = async (data: User): Promise<User | Error> => {
    return await prisma.user.create({
      data
    })
  }
}

export default UserRepository