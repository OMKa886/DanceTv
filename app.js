// // // frist app in express


// IMPORT THE MODULES
import http, { Server } from 'http'
import fs from 'fs'
import express, { response } from 'express'
import path from 'path'
import mongoose from 'mongoose'



//  VARIABLE
const app = express();
const port = 80;
const hostname = '127.0.0.1';
const filecontent = fs.readFileSync('./views/index.hbs')




// ADD CSS IN APP.JS

fs.readFile('index.html', (err, html) => {
  if (err) {
     err;
  }
  const server = http.createServer((req, res) => {
    res.statusCode = 200
    if (req.url =='/'){
      res.setHeader('content-type','text/html');
      res.write(html);
      res.end();
      res.statusCode= 200
    }
    else if (req.url ==' ./static/style.css'){
      res.setHeader('Content-type', 'text/css');
      res.write(fs.readFileSync('./static/style.css'))
      res.end();
    } // add the style css
    
    else if (req.url ==' ./static/respo.css'){
      res.setHeader('Content-type', 'text/css');
      res.write(fs.readFileSync('./static/respo.css'))
      res.end();
    } // add the respo css
    
    
    else{
      res.write("invalid requeset")
      res.end();

    }


  })
})



// // // DEFINE MONGOOSE SCHEMA
async function main() {
  await mongoose.connect('mongodb://localhost:27017/movies', { useNewUrlParser: true })

}  // if your databse has auth enable
main().catch(err => console.log(err));



const contactSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  Phone: Number,
  age: Number,
  password: Number,

})

const contact = mongoose.model('contact', contactSchema); // method must be added to the schema before compilng it with mongoose.model()

const silence = new contact({ name: 'Silence' });


console.log(silence.name);;//silence

contactSchema.methods.speak = function speak() {
  const greeting = this.name
    ? "Meow name is" + this.name
    : "I don't have name";
  console.log(greeting);
};
const Contact = mongoose.model('Contact', contactSchema);




const fluffy = new Contact({ name: 'fluffy' })
fluffy.speak(); // "Meow name is fluffy"



await fluffy.save();
fluffy.speak();


const kittens = await contact.find();
console.log(kittens);








// // // HBS SPEFIC STUFF
// app.engine('html', require('hbs').__express);
app.set('views', path.join('views')); //set views direactory
app.set('view engine', 'hbs');


// // // EXPRESS SPEFIC STUFF
app.use('/static', express.static('static')); // for serving engine files
app.use(express.urlencoded()) // To data save on your srever




// // // ENDPOINT
app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})
app.get('/contact', (req, res) => {
  res.render('Contact', { title: 'sign up NOW' })
  console.log(req.body)
})
app.post('/contact', (req, res) => {
  var myData = new contact(req.body.Contact);
  myData.save().then(() => {
    res.send("this is items has been save in database")
  }).catch(() => {
    res.status(400).send("item was not save in database ")
  })

}) // To add another page(sign.hbs)





// // SREVER IS START
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

