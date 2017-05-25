var m = require("mithril");

var SearchComponent = require('./SearchComponent');
var ListComponent = require('./ListComponent');

var Homepage = {
  view: function(vnode){
    return m("div",[
      m(SearchComponent),
      m(ListComponent)
    ]);
  }

}
module.exports = Homepage;
