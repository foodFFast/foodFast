import express from 'express';
import { categories, deleteCategory,  category ,postCategory } from '../controllers/categoriesControllers.js'

const router = express.Router()

//GET: http://localhost:3001/api/v1/categories
router.get('/',categories)

//GET: http://localhost:3001/api/v1/categories/category?name=merienda
router.get('/category', category)

//POST http://localhost:3001/api/v1/categories/
router.post('/',postCategory)

//DELETE POST http://localhost:3001/api/v1/categories/:id
router.delete('/:id', deleteCategory)



export default router;