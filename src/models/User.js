var m = require("mithril");

var User = {
  name: '',
  authenticated: false,
  locations: [],

  toggleLocation: function(id){
    if(User.authenticated){
      m.request({
        method: "POST",
        url: "http://localhost:3000/api/auth/"+id,
        headers: {
          "Authentication": localStorage.getItem("token")
        }
      })
      .then(function(){
        const index = User.locations.indexOf(id);
        if(index === -1)
          User.locations.push(id);
        else {
          User.locations.splice(index, 1);
        }
      });
    }
  },

  fetchLocations(){
    m.request({
      method: "GET",
      url: "http://localhost:3000/api/user/"+User.name,
      headers: {
        "Authentication": localStorage.getItem("token")
      }
    })
    .then(function(result){
      console.log("Eccole qui: ");
      console.log(result);
      User.locations = result.locations;
    })
  },

  toggleAuthentication(){
    console.log(User.authenticated);
    User.authenticated = !User.authenticated;
    if(User.authenticated){
      User.name = '123456'
      localStorage.setItem('token', User.name);
      User.fetchLocations();
    }
    else{
      localStorage.removeItem('token');
    }
  }
};

module.exports = User;
