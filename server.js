const express = require("express")
const fileRoute = require("./routes/files")
const app = express()
const mongoose = require('mongoose')
require("dotenv").config()

const mongo_uri = "mongodb+srv://sudharson:prati@sudharcluster.imomdcz.mongodb.net/"
mongoose.connect(mongo_uri, { useNewUrlParser: true })
    .then(()=>console.log("Mongodb connected"))
    .catch((err)=> console.log(err))


app.use(express.json())
app.set('view engine','ejs');
app.use("/uploads",express.static("uploads"));

app.use('/files',fileRoute)

require("./models/FileDetails")
const FileSchema = mongoose.model("FileDetails")

app.use(express.urlencoded({extended:false}))
app.get('/', async (req, res) => {
    try {
        const fileData = await FileSchema.find({});
        const filesData = fileData.map(data => ({
            title: data.title,
            description: data.description,
            imgSrc: data.filepath
        }));
        res.render('files/index', { filesData: filesData });
    } catch (error) {
        console.error("Error fetching file data:", error);
        res.status(500).send("Internal Server Error");
    }
});



app.listen(3000,()=>{console.log("Server running!")});
