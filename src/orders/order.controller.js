const order = require("./order.model");


const createOrder = async (req, res) => {
  try {
    const newOrder = await order(req.body);
    const savedOrder = await newOrder.save();
    res
      .status(200)
      .json({ message: "order created Successfully", order: savedOrder });
  } catch (err) {
    console.log("error on order creating", err);
    res.status(500).json({ message: "order creating failed" });
  }
};

const getOrdersByemail = async(req,res)=>{
  try{
    const {email} = req.params;
    const orders = await order.find({email}).sort({createdAt:-1})
    if(!orders)
    {
      return  res.status(404).json({message:"no orders found for this email"})

    }
    res.status(200).json(orders)

}

catch(err){
  console.log("error on getting orders",err)
  res.status(500).json({ message: "order fetching failed" });

}

}

module.exports = { createOrder,getOrdersByemail }
