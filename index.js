const express = require('express');
//const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// setup express app
const app = express();


//connect to mongodb
//mongoose.connect('mongodb://localhost/voucher_pool')
//mongoose.Promise = global.Promise;
const dbURI = 'mongodb+srv://admin:KhEKMJaTipVC9dgT@nodetest.dun0qa6.mongodb.net/voucher-pool?retryWrites=true&w=majority'
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
	.then((result) => {
		console.log('connected to db');
	})
	.catch((err) => console.log(err));

app.use(express.static('public'));

app.use(bodyParser.json());

// initiallize routes call and use routes, also add prefix 'api'
//app.use('/api', routes);
app.use('/api', require('./routes/api'));

//error handling middleware
app.use((err, req, res, next) => {
	res.status(422).send({
		error: err.message,
		status_code: 422
	})
});

// listen for requests
app.listen(process.env.port || 5000, function(){
	console.log("now listening for requests on port 5000");
});