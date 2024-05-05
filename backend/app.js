var http = require('http');
var express = require('express');

const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')

const mongoose = require('mongoose');
const uri = "mongodb+srv://admin:admin@cluster0.l3ocrem.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

const staticPath = path.resolve(__dirname, '../public')


var app = express();
app.use(bodyParser.json())
app.use(cors())

  mongoose.connect(uri, clientOptions).then(
	console.log('DB connected')
  )


app.set('port', process.env.PORT || 3005);
app.use(express.static(staticPath))

require('./app/routes')(app); 


http.createServer(app).listen(app.get('port'), function(){
	console.log('Host Running on port ' + app.get('port'));
});