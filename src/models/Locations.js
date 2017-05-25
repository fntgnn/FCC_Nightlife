var m = require("mithril");

var Locations = {
  locations: [],

  fetchAllLocations(data){
    //remember business...
    Locations.locations=[
    {
      "id": "nu-lounge-bar-bologna",
      "name": "Nu Lounge Bar",
      "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/LVDd_U9huQL49hK2njoJOw/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/nu-lounge-bar-bologna?adjust_creative=kdp_HHbdsHC1LR8AVjXDRw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=kdp_HHbdsHC1LR8AVjXDRw",
      "review_count": 5,
      "categories": [
        {
          "alias": "lounges",
          "title": "Lounges"
        },
        {
          "alias": "wine_bars",
          "title": "Wine Bars"
        },
        {
          "alias": "cocktailbars",
          "title": "Cocktail Bars"
        }
      ],
      "rating": 5,
      "coordinates": {
        "latitude": 44.49303412,
        "longitude": 11.34462
      },
      "transactions": [],
      "price": "€€",
      "location": {
        "address1": "Via De' Musei 6",
        "address2": "",
        "address3": "",
        "city": "Bologna",
        "zip_code": "40124",
        "country": "IT",
        "state": "BO",
        "display_address": [
          "Via De' Musei 6",
          "40124 Bologna",
          "Italy"
        ]
      },
      "phone": "+39051222532",
      "display_phone": "+39 051 222532",
      "distance": 488.040723568
    },
    {
      "id": "osteria-del-sole-bologna",
      "name": "Osteria del Sole",
      "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/FTh95TC3tvEgwyVekBjAHA/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/osteria-del-sole-bologna?adjust_creative=kdp_HHbdsHC1LR8AVjXDRw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=kdp_HHbdsHC1LR8AVjXDRw",
      "review_count": 10,
      "categories": [
        {
          "alias": "wine_bars",
          "title": "Wine Bars"
        }
      ],
      "rating": 4.5,
      "coordinates": {
        "latitude": 44.49382,
        "longitude": 11.34433
      },
      "transactions": [],
      "price": "€",
      "location": {
        "address1": "Vicolo Ranocchi 1D",
        "address2": "",
        "address3": "",
        "city": "Bologna",
        "zip_code": "40124",
        "country": "IT",
        "state": "BO",
        "display_address": [
          "Vicolo Ranocchi 1D",
          "40124 Bologna",
          "Italy"
        ]
      },
      "phone": "+393479680171",
      "display_phone": "+39 347 968 0171",
      "distance": 394.9328889502
    },
    {
      "id": "la-prosciutteria-bologna-3",
      "name": "La Prosciutteria",
      "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/Mg5C-lRDDoh9ZCkytU_G1A/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/la-prosciutteria-bologna-3?adjust_creative=kdp_HHbdsHC1LR8AVjXDRw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=kdp_HHbdsHC1LR8AVjXDRw",
      "review_count": 10,
      "categories": [
        {
          "alias": "wine_bars",
          "title": "Wine Bars"
        },
        {
          "alias": "tuscan",
          "title": "Tuscan"
        },
        {
          "alias": "tapasmallplates",
          "title": "Tapas/Small Plates"
        }
      ],
      "rating": 5,
      "coordinates": {
        "latitude": 44.49608,
        "longitude": 11.34589
      },
      "transactions": [],
      "price": "€€",
      "location": {
        "address1": "Via Oberdan 19A",
        "address2": "",
        "address3": "",
        "city": "Bologna",
        "zip_code": "40126",
        "country": "IT",
        "state": "BO",
        "display_address": [
          "Via Oberdan 19A",
          "40126 Bologna",
          "Italy"
        ]
      },
      "phone": "+390510065939",
      "display_phone": "+39 051 006 5939",
      "distance": 144.1609596246
    }];

    /*
    m.request({
      method: 'GET',
      url: 'https://api.yelp.com/v3/businesses/search?categories=bars&location='+data,
      headers: {
        "Authorization": "Bearer xNNTvPy6O-4oKNr2AribVWj-6UWifupIprP0UzjxSN3M3_-VCKtFZ1MzxRkYdbEAx9Xv8H8RBHjaIXFeQi05pZgArgznYV0mblOZ3vjz3hUvA050oIoSOx-a5YTrWHYx",
      },
      withCredential: true
    })
    .then(function(result){
      console.log(result);
    })
    .catch(function(error){
      console.log(error);
    });
    */
  }
};
module.exports = Locations;

/*
axios.get(`https://api.yelp.com/v3/businesses/search?categories=bars&location=${city}`,
    {
      headers: {Authorization: `Bearer ${process.env.YELP_BEARER}`}
    })
    .then( response => {
    //  console.log(response.data);
        res.json(response.data);

    })
    .catch( error => console.log("error ",error));
*/
