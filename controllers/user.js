var mongoose = require('mongoose');
var User = require('../models/user');

exports.pushLocation = function(req, res, next){
  if(req.headers.authentication){
    User.findOne({name: req.headers.authentication}, function(err, user){
      if(err){
        return next(err);
      }
      if(user){
        console.log("Vecchio user..."+user);
        const index = user.locations.indexOf(req.params.id);
        if(index === -1){
          user.locations.push(req.params.id);
        }
        else{
          user.locations.splice(index, 1);
        }
        user.save();
        return res.json({
          message: "updated location"
        });
      }
      console.log("Nuovo user!");
      const newUser = new User({
        name: req.headers.authentication,
        locations: []
      });
      newUser.locations.push(req.params.id);
      newUser.save(function(err){
        if(err){
          return next(err);
        }
        return res.json({
          message: "created user and pushed location"
        });
      });

    });
/*
    User.findOneAndUpdate({name: req.headers.authentication}, {$push: {locations: req.params.id}}, function(err, user){
      if(err){
        return next(err);
      }
      if(user){
        if(user.locations.indexOf(req.params.id)!== -1){
          user.locations.splice(user.locations.indexOf(req.params.id), 1);
        }
        res.json({
          message: "pushed location"
        });
      }
      if(!user){
        const newUser = new User({
          name: req.headers.authentication,
          locations: []
        });
        newUser.locations.push(req.params.id);
        newUser.save(function(err){
          if(err){
            return next(err);
          }
          res.json({
            message: "created user and pushed location"
          });
        });
      }
    });
*/
  }
  else{
    res.sendStatus(401);
  }
}

exports.fetchLocations = function(req, res, next){
  User.findOne({name: req.params.name}, function(err, user){
    if(err){
      return next(err);
    }
    if(!user){
      return res.json({message: "no user..."});
    }
    res.json({locations: user.locations});
  });
}
