var express = require('express');
var bodyParser = require('body-parser');

var path = require('path');

var index = require('./routes/index');
var items = require('./routes/items');

var port = 4001;

var app = express();

//View Engine
app.set('views', path.join(__dirname,'views'));
//specify view engine
app.set('view engine', 'ejs');
//render files with html extension
app.engine('html', require('ejs').renderFile);

//set static folder
app.use(express.static(path.join(__dirname,'client')));

//middleware body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', items);

app.listen(port, function(){
    console.log('Server started on...' + port);
});