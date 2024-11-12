const  mongoose  = require("mongoose");


const bookSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    category: {
        type:String,
        required:true
    },
    trending: {
        type:Boolean,
        required:true
    },
    coverImage: {
        type:String,
        required:true
    },
    oldPrice: {
        type:Number,
    },
    newPrice: {
        type:Number,
        required:true
    },
  },{
    timestamps:true
  });


  const Book = mongoose.model("Books",bookSchema)

  module.exports = Book;