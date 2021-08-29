import express from 'express'
const router = express.Router()
import { authUser, getUserProfile } from "../controlers/userController.js";
import { protect } from '../middleware/authMiddleware.js'

router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile)

export default router
