const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const cors = require('cors');


const app = express();

//importing routes
const customerRoutes = require('./routes/customer');


//settings
app.set('port', process.env.PORT || 3000)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'personas'
}, 'single'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

//routes
app.use('/', customerRoutes);


//static files  aqui va el front
//app.use(express.static(path.join(__dirname),'public'));


//starting the server
app.listen(app.get('port'), () =>{
    console.log('Server on port 3000');
});