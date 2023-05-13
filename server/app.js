var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var maintenanceRouter = require('./routes/maintenanceRoutes');
var leaseRouter = require('./routes/leaseRoutes');
var paymentsRouter = require('./routes/paymentRoutes');
var propertyRouter = require('./routes/propertyRoutes');

var app = express();


//Allow Access Control
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

//MongoDB connection Part
const { mongoDB } = require('./utils/dbConfig');

var options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose.connect(mongoDB, options, (err, res) => {
  console.log(mongoDB);
    if(err){
        console.log(err);
        console.log('MongoDB connection failed');
    }
    else {
        console.log('MongoDB connected');
    }
})


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/maintenance', maintenanceRouter);
app.use('/lease', leaseRouter);
app.use('/payments', paymentsRouter);
app.use('/property', propertyRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3001, () => {
  console.log("Server Listening on port 3001")
})

module.exports = app;
