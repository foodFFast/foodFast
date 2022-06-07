import Categories from '../models/category.js'


export const categories = async(req,res)=>{
    try {
        const user = await Categories.find()
        return res.json(user)
    } catch (error) {
        console.log(error)
    }
}
