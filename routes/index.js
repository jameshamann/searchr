'use strict';

var express = require('express');
var router = express.Router();
var http = require('http');
var fetch = require('node-fetch');



/* GET home page. */
router.get('/', function(req, res, next) {
  fetch('https://www.omdbapi.com/?t=primer')
      .then(function(res) {
          return res.json();
      }).then(function(json) {
          console.log(json.Title);
          res.render('index', {
            title: 'Searchr',
            movieTitle: json.Title,
            movieYear: json.Year

          });
        });

});



module.exports = router;
