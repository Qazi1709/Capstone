import mongoose from "mongoose";

async function dbConnect() {
  try {
    await mongoose.connect(
      "mongodb+srv://mdfaizaann:FaizanCodeForIndiaA23@faizan.r6pzw5j.mongodb.net/CuppingAapp",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    ).then(() => {
        console.log('Connected to MongoDB');
      })
      .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
      });
    // console.log("Mongo DB Connected Successfully!");
  } catch (error) {
    console.error("Connection Failed", error);
  }
}

dbConnect();