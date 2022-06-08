import express from 'express';
import { deleteProduct, getProduct, postProduct} from '../controllers/productsControllers.js';


const router = express.Router()


//get product = http://localhost:3000/api/v1/products
router.get('/',getProduct)


//post product =  http://localhost:3000/api/v1/products
router.post("/",postProduct)


//delete product = http://localhost:3000/api/v1/products/4312445
router.delete("/:id",deleteProduct)




export default router;