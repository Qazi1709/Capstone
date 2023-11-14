import express from 'express';
import './dbconnect.js'
import userRoutes from './controllers/users/index.js';
const app = express();
const port = 5003;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send(`Express server is up and running`)
})

app.use('/api/user',userRoutes);

app.listen(port,()=>{
    console.info(`server is running on port :`, port)
})