const express = require("express")
const router = express.Router();

router.get('/new',(req,res)=>{res.render('files/new')})
module.exports = router;