
// HIDE THE CLASSSES MENU BAR
function hide(){
    let btn= document.getElementById('btn')
    let para =document.getElementById('para')
    if(
        para.style.display !='block'
        )
        {para.style.display = 'block'}
        else(para.style.display = 'none'
        )        
}

const signupschema = new mongoose.Schema({
    fristname:{
      type:String
    },
    lastname:{
      type:String
    },
    email:{
      type:String
    },
    phone:{
      type:String
    },
    age:{
      type:Number
    },
    password:{
      type:String
    },
    cpassword:{
      type:String
    }
  
  })
  
   const signup = mongoose.model('signup',signupschema)
  




// const express = require("express");
// const app = express();
// const port = 8081;
// require('./db/conn');
// const path = require("path");
// const hbs = require("hbs");
// const register = require("./models/register");
// const mongoose = require("mongoose")
// const static_path  = path.join(__dirname,"../static");
// const template_path = path.join(__dirname,"../views/signup");
// const partials_path = path.join(__dirname,"../views/index");

// app.set("views",template_path);
// app.set("view engine","hbs");
// hbs.registerPartials(partials_path);
// app.use(express.json());
// app.use(express.urlencoded({extended:false}));

// app.get("/",(req,res)=>{
//     res.render("signup");
// })

// app.get("/signup",(req,res)=>{
//     res.render("signup");
// })

// app.get("/register",(req,res)=>{
//     res.render("register");
// })

// app.post("/register",async(req,res)=>{
//     try{
//         const password = req.body.password;
//         const cpassword = req.body.cpassword;
//         if(password===cpassword){
            
//             const registerEmployee = new Register({
//                firstname : req.body.firstname,
//                lastname : req.body.lastname,
//                email : req.body.email,
//                phone : req.body.phone,
//                age : req.body.age, 
//                password: req.body.password,          
//         })

//         const registered = await registerEmployee.save();
//         console.log(registered);
//         }
//         else{
//             res.send("password not matched");
//         }
//         res.send(registered);
//     }catch(error){
//        res.status(404).send(error)
//     }
// })

// app.listen(port,()=>{
//     console.log("succesfully port");
// })