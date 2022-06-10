import Order from "../models/order.js"




export const postOrder = async(req,res)=>{

        const {user,productId,...resto}=req.body
    
        const data={
            ...resto,
            user,
            productId
        }
        const newOrder=new Order(data)
        await newOrder.save()
        res.status(201).json({
            msg:"Orden creada con éxito"
        }); 


}
//función para admins
export const getAllOrders = async (req, res)=>{
    try{
        const allOrders = await Order.find()
        .populate('productId');
       

        if(allOrders.length){
            return res.json(allOrders)
        }else{
            return res.status(404).send({error: "no se encontraron órdenes"});

        }
    }catch(e){
        console.log(e.message)
        res.status(500).send("Error de servidor en getAllOrders.")
    }

}



// import Order from "../models/order.js"




// export const postOrder = async(req,res)=>{
//       const {user,product,date,...resto}=req.body
      
//     if(user && product ){
//         const order=await Order.findOne({user})
//         .populate("product")
//         if(order){
//             return res.status(400).json({
//                 msg:`La orden ${order.user}, ya existe`
//             })
//         }
  
//     const data={
//         ...resto,
//         user,
//         product,
//         date
        
//     }
    
//     const newOrder=new Order(data)
    
//     await newOrder.save()
    
    
//     res.status(201).json({
//         msg:"Orden creada con éxito"
//     }); 
//     }else{
//         return res.status(400).json({
//             msg:"Dato/s inválido/s"
//         })
//     }
    
// }