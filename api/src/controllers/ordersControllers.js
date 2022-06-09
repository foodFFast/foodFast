import Order from "../models/order.js"




export const postOrder = async(req,res)=>{
    try{
        const {user,productId,...resto}=req.body
        console.log("req.body es: ", req.body);
        if(user && productId ){
/*         const order=await Order.findById(user);
            if(order){
                return res.status(409).json({
                    msg:`La orden ${order.user}, ya existe`
                })
            }  */
    
        const data={
            ...resto,
            user,
            productId
        }
    console.log("el objetito a guardara data es: ", data);
        const newOrder=new Order(data)
    console.log("pasó el new Order(data)");
        await newOrder.save()
    console.log("pasó el await newOrder.save()");
        res.status(201).json({
            msg:"Orden creada con éxito"
        }); 
        }else{
            return res.status(400).json({
                msg:"Dato/s inválido/s"
            })
        }
    }catch(e){
        console.log("Error en postOrder. ", e)
    }

} 

//función para admins
export const getAllOrders = async (req, res)=>{
    try{
        const allOrders = await Order.find().populate('user',{
            name: 1, _id: 0
        });
        allOrders.length ? res.json(allOrders) :
        res.status(404).send({error: "no se encontraron órdenes"});
    }catch(e){
        console.log(e.message)
        res.status(500).send("Error de servidor en getAllOrders.")
    }

}

/* import Order from "../models/order.js";

*/