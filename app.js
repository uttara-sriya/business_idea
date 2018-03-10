var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');
const route = require('./routes/route');

var app = express();

//port
const port = 3000;

//adding middleware
app.use(cors());

//body parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', route);    

//connect to MongoDB
mongoose.connect('mongodb://localhost:27017/businessidea');
//on connection
mongoose.connection.on('connected',()=>{
    console.log("MongoDB connected @ 27017");
});
//on failed connection
mongoose.connection.on('error',(err)=>{
    if(err){
        console.log(err);
    }
});
//testing server
app.get('/',(req, res)=>{
 res.send('testing get calls');
});

app.listen(port,()=>{
    console.log("Server Started Successfully at port:"+port);
});