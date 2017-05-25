var m = require("mithril");
var Locations = require('../models/Locations');

var SearchComponent = {
  data: "",

  handleSubmit: function(e){
    e.preventDefault();
    console.log("submit: ", SearchComponent.data);
    Locations.fetchAllLocations(SearchComponent.data);
  },

  view: function(vnode){
    return m("form.form-group",{
      onsubmit: this.handleSubmit
    },[
      m("input.form-control[type=text][placeholder=Type something to search for...]",{
        oninput: m.withAttr("value", function(value){ SearchComponent.data = value }),
        value: SearchComponent.data
      }),
      m("button.btn.btn-primary[type=submit]","Search")
    ]);
  }

}
module.exports = SearchComponent;
