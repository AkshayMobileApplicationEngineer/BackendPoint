const mongoose = require('mongoose');

const orderItemSchema=new mongoose.Schema({
    
      productId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product',
            required:true,
      },
      quantity:{
            type:Number,
            required:true,
      }
});


const orderSchema=new mongoose.Schema({

      orderPrice:{
            type:Number,
            required:true,
      },
      customer:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
            required:true,
      },
      orderItems:{
            type: [orderItemSchema]    
      },
      address:{
            type:String,
            required:true,
      },
      status:{
            type:String,
            enum:['pending','shipped','delivered'],
            default:'pending',
      },
      paymentMethod:{
            type:String,
            enum:['cash','credit card','paypal','bank transfer','upi'],
            required:true,
      },
      paymentStatus:{
            type:String,
            enum:['pending','paid','failed'],
            default:'pending',
      },
      shippingMethod:{
            type:String,
            enum:['standard','express','free'],
            default:'standard',
      },
      shippingCost:{
            type:Number,
            required:true,
      },
}

,{timestamps:true});










export const order=mongoose.model('Order',orderSchema);

