const axios = require('axios');
//const Location = require('../models/poll');


exports.fetchLocations = function(req, res, next){
  const city = req.params.city;
  axios.get('https://api.yelp.com/v3/businesses/search?categories=bars&location='+city,
    {
          headers: {Authorization: "Bearer xNNTvPy6O-4oKNr2AribVWj-6UWifupIprP0UzjxSN3M3_-VCKtFZ1MzxRkYdbEAx9Xv8H8RBHjaIXFeQi05pZgArgznYV0mblOZ3vjz3hUvA050oIoSOx-a5YTrWHYx"}
    })
  .then( response => {
    res.json(response.data.businesses);
  })
  .catch( error => console.log("error ",error));
}
