import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    }, 
    verificationToken: String,
  }, { timestamps: true });
  
  const userModel = mongoose.model('Users', userSchema, 'users');
  export default userModel;