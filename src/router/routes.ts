import Router, { Request, Response } from "express";
import UserController from "../controllers/UserController.js";

const router = Router();

router.get("/get-upload-profilepic-url", UserController.createS3UploadUrl)

router.get("/healthcheck", (_: Request, res: Response) => {
  res.status(200)
})

router.post("/create-user", UserController.createUser)

export default router