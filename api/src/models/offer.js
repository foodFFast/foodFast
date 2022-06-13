import mongoose from 'mongoose'

const offerSchema= new mongoose.Schema({
     
});

const Offer = mongoose.model("Offer",offerSchema)
export default Offer;