import express from 'express'
const router = express.Router()
import {
    getProducts,
    getProductById,
    deleteProductById,
    createProduct,
    updateProduct
} from "../controlers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route('/')
    .get(getProducts)
    .post(protect, admin, createProduct)

router.route('/:id')
    .get(getProductById)
    .delete(protect, admin, deleteProductById)
    .put(protect, admin, updateProduct)

export default router
