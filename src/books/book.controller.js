const Book = require("./book.model");

const postBook = async (req, res) => {
  try {
    const newBook = await Book({ ...req.body });
    await newBook.save();
    res
      .status(200)
      .send({ message: "Book created Successfully", book: newBook });
  } catch (err) {
    console.log("error", err);
    res.status(500).send({ message: "Book creating failed" });
  }
};


const getBooks = async (req,res) => {

   try{
    const books  = await Book.find()
    res.status(200).send(books) 
   }
   catch(err){
    console.log("error",err)
    res.status(500).send({message:"failed to get books"})
   }
}


const getBook  = async (req,res) => {

    try{
     const book  = await Book.findById(req.params.id)
     console.log(book)
     if(!book){
       return res.status(404).send({message:"book not found"})
     }
     res.status(200).send(book) 
    }
    catch(err){
     console.log("error",err)
     res.status(500).send({message:"failed to get the book"})
    }
 }


 const updateBook  = async (req,res) => {
   

    try{
        const {id} =  req.params


     const updatedbook = await Book.findOneAndUpdate({_id:id},req.body)
     if(!updatedbook){
       return res.status(404).send({message:"book not found"})
     }
     res.status(200).send({updatedbook}) 
    }
    catch(err){
     console.log("error",err)
     res.status(500).send({message:"failed to update the book"})
    }
 }


 const deleteBook  = async (req,res) => {
   

    try{
        const {id} =  req.params


     const deletedbook = await Book.findOneAndDelete({_id:id})
     if(!deletedbook){
       return res.status(404).send({message:"book not found"})
     }
     res.status(200).send({deletedbook}) 
    }
    catch(err){
     console.log("error",err)
     res.status(500).send({message:"failed to delete the book"})
    }
 }

 

module.exports = { postBook,getBooks,getBook,updateBook ,deleteBook};
