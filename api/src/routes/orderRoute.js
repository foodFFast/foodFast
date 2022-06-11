import express from 'express';
import { check } from 'express-validator';
import { 
    deleteCompletedOrders,
    deleteOrderById,
    getAllOrders, 
    postOrder} from '../controllers/orderControllers.js'
import { validarCampos } from '../../middlewares/validar-campo.js';

const router = express.Router()

//POST  http://localhost:3001/api/v1/order
router.post('/',[
    check("user","No es un id de MongoDb válido").isMongoId(),
    check("productId","No es un id de MongoDb válido").isMongoId(),
    validarCampos
],postOrder);

//GET http://localhost:3001/api/v1/order
router.get("/",getAllOrders);

//DELETE http://localhost:3001/api/v1/order
router.delete('/', deleteCompletedOrders)

//DELETE http://localhost:3001/api/v1/order/"ObjetId de orden"
router.delete('/:id', deleteOrderById)




export default router;
