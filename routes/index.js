let  express = require('express');
let router = express.Router();
let userModule=require('../modules/user');
let loginmodule=require('../modules/login');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login',msg:'' });
});

router.post('/login', function(req, res, next) {

  let username=req.body.uname;
  let password=req.body.password;

  let logindetails= new loginmodule({
     uname:username,
     password:password
  })

  logindetails.save((err,doc)=>{
    if(err) throw err;
    res.render('login', { title: 'Login',msg:'user successfully login' });
  })
 
   })
  

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'signup',msg:''});
});

router.post('/signup', function(req, res, next) {
  let fname=req.body.fname;
  let lname=req.body.lname;
  let email=req.body.email;
  let dob=req.body.dob;

  let userDetails = new userModule({
    
    firstname:fname,
    lastname:lname,
    email:email,
    dob:dob
   });

   userDetails.save((err,doc)=>{
    if(err) throw err;
    res.render('signup', { title: 'signup',msg:'user data successfully registerd' });
  })

});

router.get('/login',function(req,res){
  res.render('login', { title: 'Password Management System'});
})
module.exports = router;
