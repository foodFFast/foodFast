import express from "express"
import Product from "../models/product.js"

export const getProduct=async(req,res)=>{
    
   
    const product= await Product.find()
                   
    
    res.status(201).json({
       product
        
    })
}

export const postProduct=async(req,res)=>{

    const {name,category,...resto}=req.body
   
      if(name && category){

        const product=await Product.findOne({name})
        if(product){
            return res.status(400).json({
                msg:`El producto ${product.name}, ya existe`
            })
        }
       
        const data={
            ...resto,
            category,
          name
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

