'use strict';

process.env.NODE_ENV = 'test';


var chai = require('chai')
var zombiedChai = require('zombied-chai')
var assert = chai.assert;
var http = require('http')
var app = require('../app.js');
const Browser = require('zombie')

describe('Movie/TV Show Search', function(){

  const browser = new Browser({site: 'http://localhost:3000' });

  before(function(done) {
    this.server = http.createServer(app).listen(3000);
    browser.visit('/', done);
  });


  it('should display a welcome page', function(){
    browser.assert.status(200);
    browser.assert.text('title', 'Searchr')

  });

  it('should display movie information from the API', function(){
    browser.assert.status(200);
    browser.assert.text('p', 'Primer 2004')

  });

});
