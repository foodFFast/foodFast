const {Schema, model}=require("mongoose")


const CategorySchema=Schema({
     
  nombre:{
        type:String,
        required:[true,"El nombre es obligatorio"],
        unique:true
    },
    usuario:{
        type:Schema.Types.ObjectId,
        ref:"Usuario",
        required:true
    }
});


module.exports=model("Categoria",CategorySchema)