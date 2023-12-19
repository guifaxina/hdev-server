import { getSignedUrl } from "@aws-sdk/s3-request-presigner"
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3"
import { randomBytes } from "crypto"
import { User } from "@prisma/client"
import UserRepository from "../repositories/UserRepository.js"

class UserService {
  private readonly userRepository: UserRepository

  constructor (userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  public createS3UploadUrl = async (): Promise<string> => {
    const region = process.env.AWS_REGION
    const bucketName = process.env.AWS_BUCKETNAME
    const accessKeyId = process.env.AWS_ACCESS_KEY as string
    const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY as string

    try {
      const client = new S3Client({
        region,
        credentials: {
          accessKeyId,
          secretAccessKey
        }
      })
      const imgName = randomBytes(16).toString('hex')

      const params = {
        Bucket: bucketName,
        Key: imgName,
      }

      const command = new PutObjectCommand(params)

      const uploadUrl = await getSignedUrl(client, command, { expiresIn: 60 })
      return uploadUrl
    } catch (error) {
      throw new Error(error)
    }
  }

  public createUser = async (user: User): Promise<User | Error> => {
    const userCreated = await this.userRepository.createUser(user)
    return userCreated
  }
}

export default UserService