const express = require('express');
const { model } = require('mongoose');
const router = express.Router();
const Product = require('../models/Product');

/* 
    USAGE :Get all the products
    URL: http://127.0.0.1:5000/products
    REQUEST : GET
    METHOD :  router.get()
    FIELDS : no-fields
*/

router.get('/products', async (request, response) => {
    try {
        let products = await Product.find();
        response.status(200).json(products);
    }
    catch (error) {
        console.error(error);
        response.status(500).json({
            error: error.message
        })
    }
});

/* 
    USAGE: GET a single proudct
    URL : http://127.0.0.1:5000/proudcts/:id
    REQUEST : GET
    METHOD : router.get()
    FIELDS : no-fields
*/
router.get('/products/:id', async (request, response) => {
    try {
        let proudctId = request.params.id;
        if (proudctId.match(/^[0-9a-fA-F]{24}$/)) //to check id is valid objectId or not 
        {
            let product = await Product.findById(proudctId);
            response.status(200).json(product);
        }
        else {
            response.status(400).json({
                error: 'Bad Request'
            })
        }
    }
    catch (error) {
        console.error(error);
        response.status(500).json({
            error: error.message
        })
    }
});

/* 
    USAGE : Create a product
    URL : http://127.0.0.1:5000/products
    REQUETS : POST
    METHOD : router.post()
    FIELDS : name, image, price ,qty, createdOn
*/
router.post('/products', async (request, response) => {
    let newProudct = {
        name: request.body.name,
        image: request.body.image,
        price: request.body.price,
        qty: request.body.qty,
        info: request.body.info
    }
    try {
        //if product is already exists
        let product = await Product.findOne({ name: newProudct.name });
        if (product)
            return response.status(406).json({
                msg: 'Product is Already Exists'
            });

        //save to database
        product = new Product(newProudct);
        product = await product.save();
        response.status(200).json({
            msg: 'Product Creation success',
            proudct: product
        })
    }
    catch (error) {
        console.error(error);
        response.status(500).json({
            error: error.message
        })
    }
});

/* 
    USAGE :Update a product
    URL :http://127.0.0.1:5000/products/:id
    REQUEST : PUT
    METHOD : rotuer.put()
    FIELDS : id,name, image,price,qty,updatedOn
*/
router.put('/products/:id', async (request, response) => {
    let productId = request.params.id;
    let UpdatedProduct = {
        name: request.body.name,
        image: request.body.image,
        price: request.body.price,
        qty: request.body.qty,
        info:request.body.info,
        updatedOn:  Date.now()
    };
    try {
        //check if proudct exist
        let product = await Product.findById(productId);
        if (!product) {
            return response.status(404).json({
                error: 'Product not exist'
            });
        }
        else {
            //update product to database
            product = await Product.findByIdAndUpdate(productId, {
                $set: UpdatedProduct
            }, { new: true });
             response.status(200).json({
                msg: 'Product updation success',
                proudct: product
            });
        }
    }
    catch (error) {
        console.error(error);
        response.status(500).json({
            error: error
        })
    }
});

/* 
    USAGE : Delete a product
    URL : http://127.0.0.1:5000/products/:id  
    REQUEST : DELETE
    METHOD :router.delete()
    FIELDS : no-fields
*/
router.delete('/products/:id', async (request, response) => {
    let productId = request.params.id;
    try{
        //if proudct is already exists
        let proudct=await Product.findById(productId);
        if(!proudct)
        {
            return response.status(404).json({
                error: 'Product not exist'
            });
        }
        else{
            proudct= await Product.findByIdAndDelete(productId);
            response.status(200).json({
                msg:'Product deletion success',
                proudct:proudct
            });
        }
    }
    catch(error){
        console.error(error);
        response.status(500).json({
            error: error
        })
    }
});

module.exports = router;