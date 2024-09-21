const mongoose = require('mongoose');


const productSchema=new mongoose.Schema({
      name: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
      },
      description: {
            type: String,
            required: true,
      },
      productImage:{
            type: String,
            required: true,
      },
      price: {
            type: Number,
            required: true,
      },
      stock: {
            type: Number,
            required: true,
      },
      category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: true,
      },
      Owner:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
      }
},{


     timestamps:true
});


export const product=mongoose.model('Product',productSchema);
