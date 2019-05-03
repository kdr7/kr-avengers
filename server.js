// Dependencies
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const bodyParser = require('body-parser')

// Call Express
const app = express();

// Heroku server || Localhost
const port = process.env.PORT || 3000;

// Body parser
app.use(bodyParser.urlencoded({ extended : true }));

// Start server
app.listen(port, () => {
    console.log('Magic is happening on port ' + port + '!');
});

// Connect to MongoDB
mongoose.connect('mongodb://user:password3@ds147746.mlab.com:47746/heroku_4jrr3wjj', { useNewUrlParser: true })
.then(() => console.log('Mongo is connected!'))
.catch(err => console.log(err));

const Schema = mongoose.Schema;

// New MongoDB schema for all heroes
const HeroSchema = new Schema ({
	identity: String,
	name: String,
	power: String,
	description: String
}, {collection: 'heroes'});

const Heroes = mongoose.model('heroes', HeroSchema);

// Grab the event collection from MongoDB
app.get('/all-heroes', function(request, response) {  
 	Heroes.find({},function(err,Heroes){
		if(err){
			console.log(err)
		}else{
			response.json(Heroes);
		}
	});
});

// New heroes created + pushed into existing Heroes array in MongoDB
app.post('/heroes', function(request,response){
	var createHero = new Heroes(request.body);
	createHero.save(function(){
		response.json(createHero);
	})
});