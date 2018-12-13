var express = require('express');
var router = express.Router();

var movie = require('../controllers/MoviesController.js');

router.get('/', movie.list);
router.get('/show/:id', movie.show);
router.get('/create', movie.create);
router.post('/save', movie.save);
router.get('/edit/:id', movie.edit);
router.post('/update/:id', movie.update);
router.post('/delete/:id', movie.delete);

module.exports = router;