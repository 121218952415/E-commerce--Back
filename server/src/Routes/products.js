const {dbinfo ,createproduct} = require("../Controlllers/products.js")
const Router = require("express");
const router = Router();

router.get("/",(req,res)=>{
    res.send("hola mundo")
})



module.exports = router;