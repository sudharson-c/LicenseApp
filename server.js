const dotenv = require('dotenv')
dotenv.config()
const express = require("express")
const fileRoute = require("./routes/files")
const app = express()
const methodOverride = require('method-override');
const mongoose = require('mongoose')

const mongo_uri = process.env.MONGO_URI
console.log(mongo_uri)
mongoose.connect(mongo_uri, { useNewUrlParser: true })
.then(()=>console.log("Mongodb connected"))
.catch((err)=> console.log(err))

app.use(methodOverride('_method'));
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
            _id : data._id,
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

