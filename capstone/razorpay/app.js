import express from "express"
import config from "config"
import paymentRoute from "./controllers/payment.js"
import './dbconnect.js'


const app = express()
const port = config.get("PORT")

app.use(express.json())
app.get('/', (req, res) => {
    res.send('Express Server is UP!')
});

app.use('/api/user',paymentRoute);
app.listen(port, () => {
    console.info('Server is Running on Port -- ', port);

})
