var express     = require('express');
var bodyParser  = require('body-parser');
var path        = require('path');
var morgan      = require('morgan');
var mongoose	= require('mongoose');
var mainRouter  = require('./node-app/routes/index');
var apiRouter   = require('./node-app/routes/api');

var port 		= process.env.PORT || 8025;
var DB          = "mongodb://localhost/test";

var app = express();

//middle ware
app.use(morgan('dev'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/', mainRouter);
app.use('/api', apiRouter);

//Connect to Mongo DB
mongoose.connect(DB, function(err){
	if(err){
		console.log('Not connected to DB' + err);
	} else {
		console.log('connected successfully to ' + DB);
	}
});

app.set('views', __dirname + '/client/views');
app.use('/app', express.static(__dirname + '/client/app'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
//app.use(express.static(path.join(__dirname, 'client')));
app.use('/client', express.static(__dirname + '/client'));


//Server Port
app.listen(port, function(){
	console.log('Running Server on Port '+ port);
});