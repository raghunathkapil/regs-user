var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var bcrypt = require('bcrypt-nodejs');

var userSchema = new Schema({
  // username: {type: String, require:true, unique: true},
  // password: {type: String, require:true},
  // email: {type: String, require:true, unique: true},
  // type: {type: String}
  firstName   : {type: String, require:true},
  lastName    : {type: String},
  email       : {type: String, require:true, unique: true},
  phoneNo     : {type: String},
  address     : {type: String},
  city        : {type: String},  
});

// userSchema.pre('save', function(next) {
//   var user = this;
//   // hash password using bcrypt.
//   bcrypt.hash(user.password, null, null, function(err, hash){
   
//     if(err) return next(err);

//     user.password = hash;
//     next();
//   });  
// });

module.exports = mongoose.model('user', userSchema);