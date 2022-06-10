import mongoose from 'mongoose'

const categorySchema= new mongoose.Schema({
     
  name:{
        type:String,
        required:[true,"El nombre es obligatorio"],
        unique:true
    }
});

const Categories = mongoose.model("Category",categorySchema)
export default Categories;