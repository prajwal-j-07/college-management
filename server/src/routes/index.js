import { Router } from "express"

import { InitConnection } from "../controllers/index.js"

const router = Router()

router.get("/", InitConnection)

export default router
