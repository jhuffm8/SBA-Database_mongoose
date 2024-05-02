// import mongoose from "mongoose";
import express from 'express'
import 'dotenv/config'
import db from './db/conn.js'
import accountRoutes from './routes/accountRoutes.js';
import customerRoutes from './routes/customerRoutes.js';
import transactionRoutes from './routes/transactionRoutes.js'



const PORT = process.env.PORT
const app = express()



app.use(express.json());
app.use('/accounts', accountRoutes);
app.use('/customers', customerRoutes);
app.use('/transactions', transactionRoutes);




try{
    app.listen(PORT, () => {
        console.log(`${PORT} is always listening`)
    })
} catch(err) {
    console.log(err)
}