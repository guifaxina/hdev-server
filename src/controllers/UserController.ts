import UserService from "../services/UserService.js"
import UserRepository from "../repositories/UserRepository.js"
import { Request, Response } from "express"

class UserController {
  private readonly userService: UserService

  constructor (userService: UserService) {
    this.userService = userService
  }

  public createS3UploadUrl = async (_: Request, res: Response): Promise<void> => {
    const signedUrl = await this.userService.createS3UploadUrl()
    res.status(200).json({ status: "success", signedUrl, message: "pre-signed url created successfully." })
  }

  public createUser = async (_: Request, res: Response): Promise<void> => {
    const userCreated = await this.userService.createUser()
    res.status(200).json({ status: "success", userCreated, message: "user created successfully."})
  }
}

const repository = new UserRepository()

const service = new UserService(repository)

export default new UserController(service)