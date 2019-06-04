//importing modules

var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

//Connect to mongoDb

mongoose.connect('mongodb://localhost:27017/contactlist');

//On connection

mongoose.connection.on('connected', () => {
    console.log("Connected to database mongodb @ 27017");
})

mongoose.connection.on('connected', (err
) => {
    console.log("Error in database connection: " + err);
})

//port no.
const port = 3000;

//adding middleware
app.use(cors());

//body- parser
app.use(bodyparser.json());

//static file

app.use(express.static(path.join(__dirname, 'public')))

//routes
app.use('/api', route);

//testing server
app.get('/', (req, res) => {
    res.send('foobar');
});

app.listen(port, () => {
    console.log('Server started at port: ' + port);
})