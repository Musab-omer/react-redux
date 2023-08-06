const express=require('express');
const app=express();
const dotEnv=require('dotenv');
const mongoose=require('mongoose');
const cors=require('cors');

//configure cors for cors browser
app.use(cors());
//configuer dotenv
dotEnv.config();
const hostname=process.env.HOST_NAME;
const port=process.env.PORT;

//configure app to resive json data
app.use(express.json());

//configure the router
app.use('/api',require('./router/productRouter'));


//connect to MongoDB database
mongoose.connect(process.env.MONGO_DB_LOCAL_URL,{useNewUrlParser: true, useUnifiedTopology: true}).then((respons)=>{
    console.log('Connected to MongoDB Successful.............');
}).catch((error)=>{
    console.error(error);
    process.exit(1); //stop the node js process if unable to connect to DB
});

app.listen(port,hostname,()=>{
    console.log(`Server start at http://${hostname}:${port}`)
})

