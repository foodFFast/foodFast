import express from 'express';
import { categories, deleteCategory, postCategory } from '../controllers/categoriesControllers.js'

const router = express.Router()


router.get('/',categories)
router.post('/',postCategory)
router.delete('/:id', deleteCategory)

export default router;