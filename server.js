const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const defaultRoute = require('./routes/defaultRoutes')
// const nodemailer = require('nodemailer')
// const {globalVariables} = require('./config/configuration')
// const flash = require('connect-flash');
// const session = require('express-session')

const app = express()



//configure express
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))


// Setup View Engine to use EJS
app.set("views", path.join(__dirname, "./views"));
app.set("views engine", "ejs");

//Routes configuration
app.use('/', defaultRoute)

// global variable
// app.use(flash());
// app.use(globalVariables);

//Setup Flash and Session
// app.use(session({
//     secret:"NJSNndjkndjkn&*H(JN46647dcbbcj",
//     saveUninitialized: true,
//     resave: true,
//     cookie: {maxAge: 3600000} //1 Hour Expiration
//   }));



app.listen
(8000, (req,res) => {
    console.log('server is runing')
})