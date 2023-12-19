import Router from "express";
import UserController from "../controllers/UserController.js";

const router = Router();

router.get("/get-upload-profilepic-url", UserController.createS3UploadUrl)

router.post("/create-user", UserController.createUser)

export default router