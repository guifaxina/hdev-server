import Router, { Request, Response } from "express";
import UserController from "../controllers/UserController.js";

const router = Router();

router.get("/get-upload-profilepic-url", UserController.createS3UploadUrl)

router.get("/oi", (_: Request, res: Response) => {
  res.json({ msg: "oi" })
})

export default router