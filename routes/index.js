var models = require('../models');

exports.index = function(req, res){
  models.Hotel.find(function(err, results) {
    res.render('index', { hotels: results });
  });
  // res.render('index');
};