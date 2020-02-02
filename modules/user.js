const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/example', {useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true});
let conn =mongoose.Collection;

let userSchema = new mongoose.Schema({
    firstname :String,
    lastname:String,
    email:String, 
    dob:Date
    
})

let userModel = mongoose.model('users', userSchema);
module.exports=userModel;

