const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/example', {useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true});
let conn =mongoose.Collection;

let loginSchema = new mongoose.Schema({
    uname :String,
    password:String,
     
})

let loginModel = mongoose.model('login', loginSchema);
module.exports=loginModel;