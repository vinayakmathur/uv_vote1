// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// var mongoose =require('mongoose');
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// const bodyParser = require ('body-parser');




// var app = express();

// // app.use(function(req, res, next) {
// //   res.header("Access-Control-Allow-Origin", "*");
// //   // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
// //  res.setHeader('Access-Control-Allow-Methods', '*');
// //   // res.setHeader('Access-Control-Allow-Headers', '*');
// //  res.setHeader('Access-Control-Allow-Credentials', true);
  
// //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// //    next();
// // });

// // app.use(function(req, res, next) {
// //   res.header("Access-Control-Allow-Origin", "*");
// //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// //   next();
// // });
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
//     res.setHeader('Access-Control-Allow-Methods', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//   });

// mongoose.connect('mongodb://localhost:27017/dtest',{ useNewUrlParser: true },(err)=>
// {
//   if(err){
//     console.log(err)
//   }
//   else{
//     console.log("Db coected")
//   }
// });
// // view engine setup

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');

// app.use(logger('dev'));
// app.use(express.json(usersRouter));
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;
const express = require('express');
const app = express();
const mongoose  = require('mongoose');
const bodyParser = require ('body-parser');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
const userRoute=require('./routes/users')
// const config = require('./config/database');

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
//     res.setHeader('Access-Control-Allow-Methods', 'POST');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//   });

// app.use('/userstest',userTestRoutes);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// mongoose.set('useFindAndModify', false);

// const userRoutes = require('./api/routes/users');
// const userTestRoutes = require('./api/routes/userstest');

app.use('/users',userRoute);


mongoose.connect('mongodb://localhost:27017/dtest',{ useNewUrlParser: true },()=>console.log("Db Connected"))
// mongoose.connect(config.database);
//  let db = mongoose.connection;

// // Check connection
//  db.once('open', function(){
//    console.log('Connected to MongoDB');
//  });
//  // Check for DB errors
//  db.on('error', function(err){
//   console.log(err);
// });

// app.use((req, res , next )=> {
//     res.status(200).json({
//         message:'Test'
//     })
// })

module.exports = app;