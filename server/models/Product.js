const mongoose=require('mongoose');
//const {Schema}=mongoose;

//create prduct schema which it will map to mongodb  collection
const productSchema =new mongoose.Schema({
    name:{type:String, required:true,unique:true},
    image:{type:String,required:true},
    price:{type:Number,required:true},
    qty:{type:Number,required:true},
    info:{type:String,required:true},
    createdOn:{type:Date,default:Date.now()},
    updatedOn:{type:Date}
});

//create a model which allow us to use schema we created
const Product=mongoose.model('Product',productSchema);

module.exports=Product;