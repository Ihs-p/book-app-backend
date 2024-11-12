const  mongoose  = require("mongoose");


const orderSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    address: {
        country:{
            type:String,
            required:true
        },
        state:{
            type:String,
            required:true
        },
        city:{
            type:String,
            
        },
        zipcode:{
            type:String,
            
        }
       
    },
    phone: {
        type:Number,
        required:true
    },
    productIds:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Book',
            required:true
        }
    ] ,
    totalPrice: {
        type:Number,
        required:true
    },

  
  },{
    timestamps:true
  });


  const order = mongoose.model("Orders",orderSchema)

  module.exports = order;