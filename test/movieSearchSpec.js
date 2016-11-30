var chai = require('chai')
var assert = chai.assert;
var http = require('http');
var app = require('../app.js');
const Browser = require('zombie')


describe('Movie/TV Show Search', function(){
  this.server = http.createServer(app).listen(3000);
  const browser = new Browser({site: 'http://localhost:3000' });


  it('should display a welcome page', function(){
    return browser.visit('/')
    browser.assert.success();
    browser.assert.text('title', 'Searchr')


  });

});
