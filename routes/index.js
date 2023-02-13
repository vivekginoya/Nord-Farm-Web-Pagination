var express = require('express');
var USER = require('../model/user');
var router = express.Router();

// Home Page
router.get('/', function(req, res, next) {
  res.render('firstpage');
});

// Add Data Page
router.get('/adddata', function(req, res, next) {
  res.render('formfill');
});

// Show Data Page
router.get('/showdata', async function(req, res, next) {
  let abc = await USER.find()
  let page = req.query.page    
  let limit = 2
  let farmdata = await USER.find().limit(limit)
  .skip((page - 1) * limit)
  res.render('overview', { farmdata , abc});
});

// Product Detail View Page
router.get('/product',async function(req, res, next) {
  let id = req.query.id 
  let getdata = await USER.findById(id)
  res.render('product', { getdata });
});

// Add data
router.post('/add', async function(req, res, next) {
  await USER.create(req.body)
  res.render('formfill');
});

module.exports = router;
