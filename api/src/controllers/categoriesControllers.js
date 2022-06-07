import Categories from '../models/category.js'
import Product from '../models/product.js'


export const categories = async(req,res)=>{
    try {
        const user = await Categories.find()
        return res.json(user)
    } catch (error) {
        console.log(error)
        return res.json({error: "Error de servidor"})
    }
}

export const category = async(req,res)=>{
    const name = req.query.name
    try {
        if(!name) return res.json({error: "query invalid"})
        const categories = await Product.find({category : name}) 
        if(!categories) return res.json({error: "not found category"})
        return res.json(categories)    
    } catch (error) {
        console.log(error)
        return res.json({error: "Error de servidor"})   
    }
}