var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MoviesSchema = new Schema({
    title: String, 
    year: Number,
    rating: Number,
    genre: String,
    description: String,
    actors: [{ name: String }],
    country: String,
    income: Number,
    duration: Number
});

module.exports = mongoose.model('Movies', MoviesSchema);