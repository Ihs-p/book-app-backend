const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    required: true,
  },
});

userSchema.pre("save", async function (next) { 
  if (!this.isModified("password")) return next(); // 'this' now refers to the document
  this.password = await bcrypt.hash(this.password, 10); // Hash the password
  next();
});

const User = mongoose.model("users", userSchema);

module.exports = User;
