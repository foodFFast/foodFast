import express from 'express';
import { check } from 'express-validator';
import { getAllOrders, postOrder} from '../controllers/orderControllers.js'
import { validarCampos } from '../../middlewares/validar-campo.js';

const router = express.Router()

//get  http://localhost:3001/api/v1/order
router.post('/',[
    check("user","No es un id de MongoDb válido").isMongoId(),
    check("productId","No es un id de MongoDb válido").isMongoId(),
    validarCampos
],postOrder)
router.get("/",getAllOrders)




export default router;
