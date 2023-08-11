const express = require("express");
const app = express();
const PORT = 3000;

require("dotenv").config();

const mongoose = require("mongoose");
const Fruit = require("./models/fruit.js");
// const fruits = require("./models/fruits.js");
// const vegetables = require("./models/vegetable.js");
const Vegetable = require("./models/vegetable.js");

// -------MiddleWare (app.set)
app.set("view engine", "jsx");

app.engine("jsx", require("express-react-views").createEngine());

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

//Mout Routes ( app.get)

app.get("/", (req, res) => {
  res.send(
    "<h1>Hi , This is the index page </h1> <a href='/fruits'>fruits</a><br/><a href='/vegetables'>vegetables</a> "
  );
});

app.get("/fruits", async (req, res) => {
  const someFruits = await Fruit.find({});
  console.log(someFruits)
  res.render("fruits/Index", {
    allFruits: someFruits,
  });
});

// -------------{ Index => All Fruits }

app.post("/fruits", async (req, res) => {
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  const newFruit = await Fruit.create(req.body);
  // await res.send(newFruit);
  console.log(fruits);
  res.redirect("/fruits");
});

// -------{POST}

app.get("/fruits/new", (req, res) => {
  res.render("fruits/New");
});

app.get("/fruits/:id", async (req, res) => {
  const eachFruit = await Fruit.findById(req.params.id);
  await res.render("fruits/Show", {
    fruit: eachFruit,
  });
});
// -------------{ Show => Each Fruit }

// vegetables route

app.post("/vegetables", async (req, res) => {
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  const newVegetable = await Vegetable.create(req.body);
  // res.send(newVegetable);
  // console.log(newVegetable);
  res.redirect("/vegetables");
});

app.get("/vegetables", async (req, res) => {
  const someVegetables = await Vegetable.find({});
  res.render("vegetables/Index", {
    allVegetables: someVegetables,
  });
});

app.get("/vegetables/new", (req, res) => {
  res.render("vegetables/New");
});

app.get("/vegetables/:id", async (req, res) => {
  const eachVegetable = await Vegetable.findById(req.params.id);
  res.render("vegetables/Show", {
    vegetable: eachVegetable,
  });
});

app.listen(PORT, (req, res) => {
  console.log(`Listening on 3k`);
});
// -----------------{Server}



////////////////////////////////////////////////////////
// const express = require("express")

// const app = express();

// // const newFruit = await Fruit.create({
// //     name: req.body.name,
// //     color: req.body.color,
// //     readyToEat: req.body.readyToEat,
// //   });
// //   res.send(newFruit)

// const PORT = 3000
// require('dotenv').config()

// const mongoose = require('mongoose');

// //... and then farther down the file
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connection.once('open', ()=> {
//     console.log('connected to mongo');
// });

// // const fruits = ['apple', 'banana', 'pear'];

// //**** Middleware***///
// app.set("view engine","jsx"); // need to run command npm i express-react-view to install this dependency in package.json
// app.use (express.json());
// app.engine("jsx", require("express-react-views").createEngine());

// //near the top, around other app.use() calls
// //The method below called;express.urlencoded is a built in method that sort(?) the data and determine what needsto be done (?)
// //in this case express.urlencoded access the data that was posted to fruits
// app.use(express.urlencoded({extended:false}));

// app.use((req, res, next) => {
//     console.log('I run for all routes');
//     next();
// });

//  const fruits = require('./models/fruits'); //NOTE: it must start with ./ if it's just a file, not an NPM package

// //---(Index => All Fruits)
// //each app.get() is a route handler
// //E.g:
// /* app.get('/fruits/', (req, res) => {
//     res.send(fruits);
//  }); */
//  const Fruit = require('./models/fruit.js');
//  //... and then futher down the file
//  app.post('/fruits/', async (req, res)=>{
//      if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
//          req.body.readyToEat = true;
//      } else { //if not checked, req.body.readyToEat is undefined
//          req.body.readyToEat = false;
//      }

//      const newFruits = await Fruit.create(req.body)
//      await res.send(newFruit);
//      console.log(fruits);
//      res.redirect("/fruits")
//  });

//  //Post route --> Creates information
// app.post('/fruits', (req, res) => {
//     app.post('/fruits', (req, res)=>{
//         if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
//             req.body.readyToEat = true;
//         } else { //if not checked, req.body.readyToEat is undefined
//             req.body.readyToEat = false;
//         }
//         fruits.push(req.body);
//         res.redirect('/fruits'); //send the user back to /fruits

//         fruits.push(req.body);
//         res.json(req.body);
//         // res.redirect('/fruits');

//         app.get('/fruits/:id', (req, res)=>{
//             Fruit.findById(req.params.id, (err, foundFruit)=>{
//                 res.render('fruits/Show', {
//                     fruit:foundFruit
//                 });
//             });
//         });

//     });
// });

// // "/" route
// // app.get('/', (req,res)=>{
// //     res.send("<h1>This is the index page</h1>")
// // })

// // app.get('/',(req,res)=>{
// //     res.render("Index", {fruit:fruits})
// // })

// // app.get('/fruits',(req,res)=>{
// //     res.json( {fruit:fruits})
// // })

// app.get('/test',(req,res)=>{
//     res.json({fruits})
// })

// //New file in Views folder, makes a form for user to submit data on a new fruit, it is posted to fruits upon submit
// app.get('/fruits/new',(req,res)=>{
//     res.render('New')
// })

// //add show route //displays each fruit
// app.get('/',(req,res)=>{
//     res.render("Index", {fruit:fruits})
// })

// app.get('/fruits/:indexOfFruitsArray', function(req, res){
//     res.render('Show');
// });

// app.get('/fruits/:indexOfFruitsArray', (req, res) => {
//     res.send(fruits[req.params.indexOfFruitsArray]);
// });

// //Models
//   //data(javascript)
// app.listen(PORT,(req,res) =>{
//     console.log(`Yerr on 3k`)
// })

// module.exports = fruits;
