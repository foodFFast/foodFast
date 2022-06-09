import Order from "../models/order.js";

//función para admins
export const getAllOrders = async (req, res)=>{
    try{
        const allOrders = await Order.find();
        allOrders.length ? res.json(allOrders) :
        res.status(404).send({error: "no se encontraron órdenes"});
    }catch(e){
        res.status(500).send("Error de servidor en getAllOrders.", e)
    }

}