import UserService from "../services/UserService.js"
import { Request, Response } from "express"

class UserController {
  private readonly userService: UserService

  constructor (userService: UserService) {
    this.userService = userService
  }

  public createS3UploadUrl = async (_: Request, res: Response): Promise<void> => {
    const signedUrl = await this.userService.createS3UploadUrl()
    res.json({ signedUrl })
  }
}

const service = new UserService()

export default new UserController(service)