import express from "express"
import dotenv from "dotenv"
import router from "./router/routes.js"
dotenv.config()

const PORT = process.env.SERVER_PORT

const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use("/api/v1", router)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))