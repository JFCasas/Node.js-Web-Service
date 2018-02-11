var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const jwtMiddleware = require('express-jwt')

var db = require("./config/database");



var places = require('./routes/places'); 
var users = require('./routes/users');
var sessions = require('./routes/sessions');
var favourites = require('./routes/favourites');

db.connect();
var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(jwtMiddleware({secret:'dfhwgfreufewefeiyPosteriormenteehrhg'})

	.unless({path:['/sessions','/users'], method:'GET'})

)

/*app.use(jwtMiddleware({secret:'dfhwgfreufewefeiyPosteriormenteehrhg'})

	.unless({path:['/sessions']})

)*/

app.use('/places', places);
app.use('/users', users);
app.use('/sessions', sessions);
app.use('/favourites', favourites);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  console.log(err)
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

module.exports = app;
