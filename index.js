//El siguiente código es un ejemplo de servidor web escrito en Node.js.

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Seminario MongoDB\n');
}); 

server.listen(port, hostname, () => {
  //console.log(`Server running at http://${hostname}:${port}/`);
});

const mongoose = require('mongoose');
//Creamos la conexión con mongo
mongoose.connect('mongodb://127.0.0.1:27017/Netflix');

var Movies = mongoose.model('movies', { 
    title: String, 
    year: Number,
    rating: Number,
    genre: String,
    description: String,
    actors: Array,
    country: String,
    income: Number,
    duration: Number
 });

//inserto nueva dta
//const peli = new Movies({ title: 'prueba', year: 2011 });
//peli.save().then(() => console.log('meow'));


//listo data
//Movies.findOne({ 'title': 'movi2' }, '', function (err, Movies) {
//    if (err) return handleError(err);
    // Prints "Space Ghost is a talk show host".
//    console.log('%s %s is a %s.', Movies.title, Movies.year);
//});





