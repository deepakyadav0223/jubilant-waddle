const express = require('express');
const port = process.env.PORT || 80;
const app = express();
const cors = require('cors');
const {productsList}  = require("./products");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/products",(req,res)=>{
    try {
        res.status(200).json({
            products:productsList
        })
    } catch (error) {
        console.log(error);
        
    }
})




app.listen(port ,()=>{
    console.log(`Server is Running at ${port}`);
});