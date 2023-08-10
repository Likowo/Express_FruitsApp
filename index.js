const express = require("express")

const app = express();

const fruits = [
    {
        name:'apple',
        color: 'red',
        readyToEat: true
    },
    {
        name:'pear',
        color: 'green',
        readyToEat: false
    },
    {
        name:'banana',
        color: 'yellow',
        readyToEat: true
    }
];


const PORT = 3002


const { createEngine } = require("express-react-views");

// const fruits = ['apple', 'banana', 'pear'];

//middleware
app.set("view engine","jsx");

app.engine("jsx", require("jsx-view-engine").createEngine());

//near the top, around other app.use() calls
app.use(express.urlencoded({extended:false}));

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});


const fruits = require('./models/fruits.js'); //NOTE: it must start with ./ if it's just a file, not an NPM package

//---(Index => All Fruits)
// app.get('/fruits/', (req, res) => {
//     res.send(fruits);
// });


app.get('/fruits/:indexOfFruitsArray', function(req, res){
    res.render('Show');
});  

app.post('/fruits', (req, res) => {
    app.post('/fruits', (req, res)=>{
        if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
            req.body.readyToEat = true;
        } else { //if not checked, req.body.readyToEat is undefined
            req.body.readyToEat = false;
        }
        fruits.push(req.body);
        res.redirect('/fruits'); //send the user back to /fruits
    });
});


//add show route
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.send(fruits[req.params.indexOfFruitsArray]);
});



app.listen(PORT,(req,res) =>{
    console.log(`Yerr on 3k`)
})

module.exports = fruits;