var mongoose = require('mongoose');
var Movies = require("../models/Movies");

var moviesController = {};

moviesController.list = function(req, res){
    
    Movies.find({}).exec(function(err, movies){
        if( err ){ console.log('Error: ', err); return; }
        console.log("The INDEX");
        res.render('../views/movie/index', {movies: movies} );
        
    });
    
};

moviesController.show = function(req, res){
    Movies.findOne({_id: req.params.id}).exec(function(err, movie){
        if( err ){ console.log('Error: ', err); return; }

        console.log(movie);
        
        res.render('../views/movie/show', {movie: movie} );
    });
    
};

moviesController.create = function(req, res){
    res.render('../views/movie/create');
};

moviesController.save = function(req, res){
    var movie = new Movies( req.body );
    
    movie.save(function(err){
        if( err ){ console.log('Error: ', err); return; }
         
        console.log("Successfully created a movie. :)");
        res.redirect("/movies/show/"+movie._id);
        
    });
};

moviesController.edit = function(req, res) {
  Movies.findOne({_id: req.params.id}).exec(function (err, movie) {
    if (err) { console.log("Error:", err); return; }
    
    res.render("../views/movie/edit", {movie: movie});
    
  });
};

moviesController.update = function(req, res){
    Movies.findByIdAndUpdate( req.params.id, {$set: {
        title: req.body.title,
        year: req.body.year
    }}, { new: true },
    function( err, movie){
        if( err ){ 
            console.log('Error: ', err); 
            res.render('../views/movie/edit', {movie: req.body} );
        }
        
        //console.log( movie );
        
        res.redirect('/movies/show/' + movie._id);
        
    });
};

moviesController.delete = function(req, res){
    
    Movies.remove({_id: req.params.id}, function(err){
        if( err ){ console.log('Error: ', err); return; }
        
        console.log("Movies deleted!");
        res.redirect("/movies");
    });
    
};

module.exports = moviesController;