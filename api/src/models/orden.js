const {Schema,model}=require("mongoose");

const OrdenSchema=Schema({


    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    status:{
        type:String,
        required:true,
        enum:["Pending","Rejected","Accepted"]
        
    },
    img:{
        type:String
    },
    date:{
        type:Date, // o string
        required:true,

    },
   total:{
       type:Number,
       required:true
   },
   product:{
       type:Schema.Types.ObjectId,
       ref:"Product",
       required:true
   }
    
})


module.exports=model("Orden",OrdenSchema)