import mongoose from 'mongoose'

const mealComboSchema= new mongoose.Schema({ 
    name:{
        type:String,
        required:[true,"El nombre es obligatorio"],
        unique:true,
    },
    productsId:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    }],
    price:{
        type:Number,
       // required: true
    },
    rating:{
        type:Number,
        default: 0
    },
    offer:{
        type:Boolean,
        default: false
    }        
});

const mealCombo = mongoose.model("mealCombo",mealComboSchema)
export default mealCombo;