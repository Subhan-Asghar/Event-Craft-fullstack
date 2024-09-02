const mongoose = require('mongoose');
const userSchema =new mongoose.Schema({
    title:{
        type:String,
    },
    description:{
        type:String,
    },
    location:{
        type:String,

    },
    date:{
        type:String,

    }

})
const event=mongoose.model('event',userSchema)
module.exports=event