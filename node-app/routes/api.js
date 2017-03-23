var userModel	= require('../models/userModel');
var express = require('express');
var router  = express.Router();

router.post('/user/addUser', function(req, res){
		var user 	  	= new userModel();
		
        user.firstName   = req.body.firstName,
        user.lastName    = req.body.lastName,
        user.email       = req.body.email,
        user.phoneNo     = req.body.phoneNo,
        user.address     = req.body.address,
        user.city        = req.body.city,     


		user.save(function(err){
			if(err){
				res.json("error : " + err).status(501);
			} else {
				res.json("respond : User Added").status(201);
			}
		});
	});
    
router.get('/user/allusers', function(req, res){

		userModel.find({}).exec(function(err, users) {
  			if(err) throw err;

			res.json(users);
		});
	
	});

module.exports = router;