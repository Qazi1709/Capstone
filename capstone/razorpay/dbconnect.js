import mongoose from "mongoose";
import config from 'config';
async function dbConnect(){
    try {
        await mongoose.connect(config.get('MONGO_STRING'));
        console.log('Mongo DB Connected Successfully!')
    } catch (error) {
        console.error('Connection Failed');
    }
}

dbConnect();