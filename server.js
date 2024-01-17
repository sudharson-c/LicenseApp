const express = require("express")
const fileRoute = require("./routes/files")
const app = express()

app.set('view engine','ejs');
app.use('/files',fileRoute)
app.get('/',(req,res)=>{
    const filesData = [
        { title: "File 1", description: "Description 1", imageSrc: "path/to/image1.jpg" },
        { title: "File 2", description: "Description 2", imageSrc: "path/to/image2.jpg" },
        { title: "File 3", description: "Description 3", imageSrc: "path/to/image3.jpg" },
        // Add more file entries as needed
    ];
    res.render('files/index',{filesData})}
)

app.listen(3000);
