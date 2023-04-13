import express from "express"
import cors from "cors"

import routeManager from "../routes/index.js"

const app = express()

app.use(
  cors({
    origin: "*",
  })
)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/", routeManager)

export default app
