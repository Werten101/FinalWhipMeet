var express = require('express');
var router = express.Router();

var Meet = require('../models/Meet.js');

/* GET /meets listing. */
router.get('/', function(req, res, next) {
  Meet.find(function (err, meets) {
    if (err) return next(err);
     res.json(meets);
    
  });
});

/* POST /meets */
router.post('/', function(req, res, next) {
  Meet.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /meets/id */
router.get('/:id', function(req, res, next) {
  Meet.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /meets/:id */
router.put('/:id', function(req, res, next) {
  Meet.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /meets/:id */
router.delete('/:id', function(req, res, next) {
  Meet.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;