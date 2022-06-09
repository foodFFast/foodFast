import Product from "../models/product.js"

export const allProducts=async(req,res)=>{
       const {name}=req.query
    const products= await Product.find()
    if(!products){
        return res.status(400).json({
            msg:"not found products"
        })
    }     
    res.status(201).json({
       products
        
    })
}
export const filterProducts=async(req,res)=>{
    const {name}=req.query
 if (!name){
     return res.status(400).json({
         msg:"invalid query name"
     })
 }
 const products= await Product.find({name:name})
 if(products.length===0){
     return res.status(400).json({
         msg:"not found Products"
     })
 }     
 res.status(201).json({
    products
     
 })
}


export const postProduct=async(req,res)=>{

    const {name,category,orderId,...resto}=req.body
   
      if(name && category && orderId){

        const product=await Product.findOne({name})
        if(product){
            return res.status(400).json({
                msg:`El producto ${product.name}, ya existe`
            })
        }
       
        const data={
            ...resto,
            category,
          name,
          orderId
        }
        
        const newProduct=new Product(data);
        await newProduct.save()


        res.status(201).json({
            msg:"Producto creado con éxito"
        });

      }else{
          return res.status(400).json({
              msg:"Los campos nombres y/o categoria faltan"
          })

      } 

}

export const putProduct=async(req,res)=>{
    const {id}=req.params
    const {...resto}=req.body

    
        const productoUpdate=await Product.findByIdAndUpdate(id,resto,{new:true})
        res.status(200).json(productoUpdate)
    if(id.length===0){
        return res.status(400).json({
            msg:"El id es incorrecto"
        })
    }
}


export const deleteProduct=async(req,res)=>{
        const {id}=req.params
        const product=await Product.findByIdAndRemove(id)
       
        res.status(200).json({
            msg:"Producto Eliminado"
        })
}

export const upDate = async(req,res)=>{
    try {
        const id = req.params.id
        const upDates = req.body
        const product = await Product.findByIdAndUpdate(id, upDates)
        if (!product) return res.json({err: "not found product"})
        return res.json({ok: "upDate Product"})
    } catch (error) {
        console.log(error)
        return res.json({msg: "Error de servidor"})
    }
}

