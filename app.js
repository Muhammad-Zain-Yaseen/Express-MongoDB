
const express = require('express');
const mongoose =  require('mongoose');
const productRouter=require('./Routes/products')
const productApiRouter=require('./Routes/productsApi');


const app= express();




app.set('view engine', 'ejs')
app.use(express.json());

app.use('/api/products',productApiRouter);



app.use('/products',productRouter);


mongoose.connect('mongodb://127.0.0.1:27017/Zayn')
.then(()=>{
    console.log("connected")
})
.catch(()=>{
    console.log('Not connected')
})

app.listen(2000)