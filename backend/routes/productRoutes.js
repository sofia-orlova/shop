import express from 'express'
const router = express.Router()
import { getProducts, getProductById, deleteProductById } from "../controlers/productController.js";
import { protect, admin } from "../middleware/authMiddleware";

router.route('/').get(getProducts)
router.route('/:id').get(getProductById).delete(protect, admin, deleteProductById)

export default router
