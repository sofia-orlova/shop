import express from 'express'
const router = express.Router()
import { authUser } from "../controlers/userController.js";

router.post('/login', authUser)

export default router
