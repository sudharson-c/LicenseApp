const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required : true,
        },
        description: {
            type : String,
            required : true,
        },
        filepath : String,
        
    },{collection:"FileDetails"},
)
mongoose.model('FileDetails',fileSchema);