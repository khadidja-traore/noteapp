var express = require("express"); 

var app = express();

const bcrypt = require('bcrypt');


//pour faire des requetes inter_domaines 
var cors = require('cors');
app.use(cors());

//pour gérer les cookies 
const cookieParser = require("cookie-parser");
app.use(cookieParser());

//pour gérer les jetons JWT 
const {createTokens, validateTokens} = require("./JWT")

//pour faire des requtes PUT et DELETE 
const methodOverride = require('method-override')

//pour utiliser des modèles 
const User = require("./models/User");
const Note = require("./models/Note");

app.use(methodOverride('_method'))
var bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: false}));
require('dotenv').config();

const url =  process.env.DATABASE_URL 

const connectionParams ={
    useNewUrlParser:true,
    useUnifiedTopology: true
}

mongoose.connect(url, connectionParams).then(()=>{
    console.log("Mongodb database connected !");
}).catch(err => console.log(err));


app.post('/api/register', function(req, res){

    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    user.save().then(()=>{
        console.log("User saved !");
        res.json(user);
    });
    
})

const port = process.env.PORT || 5500;
var server = app.listen(port, function(){
    console.log("Node server is running");
});