import express from 'express';
import { deleteProduct, getProduct, postProduct, upDate} from '../controllers/productsControllers.js';


const router = express.Router()


//get product = http://localhost:3001/api/v1/products
router.get('/',getProduct)

//post product =  http://localhost:3001/api/v1/products
router.post("/",postProduct)

//patch product =  http://localhost:3001/api/v1/:id
router.patch('/:id', upDate)

//delete product = http://localhost:3001/api/v1/products/4312445
router.delete("/:id",deleteProduct)


export default router;