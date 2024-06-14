const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/trialdb');
 

const userschema=mongoose.Schema({
    name:String,
    email:String,
    url:String
});

module.exports=mongoose.model('usermodel',userschema)