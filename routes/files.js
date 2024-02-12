const e = require("express");
const express = require("express")
const mongoose = require("mongoose")
const router = express.Router();
const multer = require("multer");


const storage = multer.diskStorage({
    destination: (req,file,cb)=>{cb(null,"./uploads")},
    filename : (req,file,cb)=>{
        const uniqueCode = Date.now()
        cb(null,uniqueCode+file.originalname);
    },
})
const upload = multer({storage:storage})

router.get('/new',(req,res)=>{res.render('files/new')})

require("../models/FileDetails")
const FileSchema = mongoose.model("FileDetails")
router.post('/',upload.single("imageFile"), async(req,res)=> {
    const userFile = req.file
    const fileTitle = req.body.title
    const fileDesc = req.body.description

    try {
        await FileSchema.create({title: fileTitle,description: fileDesc,filepath: userFile.filename});
        res.redirect("/");
    } catch (error) {
        res.send({status: error})
    }
})
router.get("/",(req,res)=>
{
    FileSchema.find({}).then((data)=>{
        try {
            res.send({status: "ok",data: data})    
        } catch (error) {
            res.send({status: error,data: null})
        }
    })
})

//router.delete("/:")
module.exports = router;