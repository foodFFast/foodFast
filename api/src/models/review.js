import mongoose, { SchemaTypes } from "mongoose";
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    storeId: {
        type: Schema.Types.ObjectId,
        ref: 'Store',
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    date: SchemaTypes.Date,
    score: {
        type: Number,
        min: 1, max: 5,
        required: true
    },
    title: String,
    comment: String
},{
    timestamps: true
});
const Review = mongoose.model('Review', reviewSchema);
export default Review;