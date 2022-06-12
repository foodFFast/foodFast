import express from 'express';
import { check } from 'express-validator';
import { 
    deleteCompletedOrders,
    deleteOrderById,
    getAllOrders, 
    postOrder,
    updateOrderStatus} from '../controllers/orderControllers.js'
import { validarCampos } from '../../middlewares/validar-campo.js';

const router = express.Router()

//POST  http://localhost:3001/api/v1/order
router.post('/',[
    check("user","No es un id de MongoDb válido").isMongoId(),
    check("productId","No es un id de MongoDb válido").isMongoId(),
    validarCampos
],postOrder);

//GET http://localhost:3001/api/v1/orders
router.get("/",getAllOrders);

//DELETE http://localhost:3001/api/v1/orders
router.delete('/', deleteCompletedOrders)

//DELETE http://localhost:3001/api/v1/orders/"ObjetId de orden"
router.delete('/:id', deleteOrderById)

//PUT http://localhost:3001/api/v1/orders?id=${orderId}&status=${orderStatus}
router.put('/', updateOrderStatus)


export default router;
