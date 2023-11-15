import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
   
    name: {
      type: String,
      required: true,
    },
    mobileNumber : {
      type : String,
      required : true,
    },
    email: {
      type: String,
      required: true,
    },
    gender :{
      type : String,
    },
    age : {
      type : Number,
    },
    address : {
      type : String
    }
  }, { timestamps: true });
  
  const patientModel = mongoose.model('Patients', patientSchema, 'patients');
  export default patientModel;