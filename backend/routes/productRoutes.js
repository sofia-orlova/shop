import express from 'express'
const router = express.Router()
import {
    getProducts,
    getProductById,
    deleteProductById,
    createProduct,
    updateProduct,
    createProductReview,
    getTopProducts
} from "../controlers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route('/')
    .get(getProducts)
    .post(protect, admin, createProduct)

router.route('/:id/reviews').post(protect, createProductReview)
router.get('/top', getTopProducts)

router.route('/:id')
    .get(getProductById)
    .delete(protect, admin, deleteProductById)
    .put(protect, admin, updateProduct)

export default router
