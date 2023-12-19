import express from "express"
import dotenv from "dotenv"
import router from "./router/routes.js"
import cors from "cors"
dotenv.config()

const PORT = Number(process.env.PORT) || 8080

const app = express()

app.use(cors({
  origin: process.env.ORIGIN_URL
}))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use("/api/v1", router)

app.listen(PORT, "0.0.0.0", () => console.log(`Server running on port ${PORT}`))