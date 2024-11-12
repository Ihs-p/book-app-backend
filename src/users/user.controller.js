const User = require("./user.model");
var jwt = require('jsonwebtoken');


const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  
  try {
      const user = await User.findOne({ username });
      console.log("user : ",user);
    
    if (!user) {
      return res.status(404).json({ message: "admin not found" });
    }
    if (password !== user.password) {
        return res.status(401).json({ message: "Invalid password" });
    }

const  token = jwt.sign({ id: user._id , username:user.username,role:user.role},
    JWT_SECRET_KEY,
     {expiresIn: "1h"}
    );

    return res.status(200).json({
        message:"user authentication successfull",
        token,
        user:{
            id:user._id,
            username:user.username,
            role:user.role
        }

    })

  } catch (error) {
    console.log("failed to login as admin");
    res.status(401).send({ message: "failed to login as admin" });
  }

//   const isValidPassword = await user.comparePassword(password);
};


module.exports = {loginUser}