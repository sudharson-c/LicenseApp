const express = require("express")
const mongoose = require("mongoose")
const router = express.Router();
const multer = require("multer");
const fs  = require("fs")


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
router.get("/:id", async (req, res) => {
    try {
        const fileId = req.params.id;
        const fileData = await FileSchema.findById(fileId);
        if (!fileData) {
            console.log("File not found");
            return res.status(404).send("File not found");
        }
        const fileToSend = { title: fileData.title, description: fileData.description, filePath: fileData.filepath };
        res.render("files/file", { fileData: fileToSend });
    } catch (error) {
        console.error('Error fetching file:', error);
        res.status(500).send('Error fetching file');
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const deletedId = req.params.id;
        const fileData = await FileSchema.findByIdAndDelete(deletedId);
        if (!fileData) {
            console.log("File not found");
            return res.status(404).send("File not found");
        }
        const filePath = fileData.filepath;
        fs.unlinkSync(`${__dirname}/../uploads/${filePath}`);
        console.log('File deleted from server:', filePath);
        res.status(200).redirect("/");
    } catch (error) {
        console.error('Error deleting file:', error);
        res.status(500).send('Error deleting file');
    }
});

module.exports = router;