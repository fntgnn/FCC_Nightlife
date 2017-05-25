var m = require("mithril");

var Locations = require("../models/Locations");
var User = require("../models/User");

var ListComponent = {

  handleClick: function(id){
    if(User.authenticated){
      User.toggleLocation(id);
    }
    else{
      console.log("Autenticati, aldamar!");
    }
  },

  renderGoing(id){
    if(User.locations.indexOf(id) === -1)
      return "0 going";
    else {
      return "1 going";
    }
  },

  view: function(vnode){
    const locations = Locations.locations;

    return m("div.list-group",[
      locations.map(function(item){
        return m("a.list-group-item.list-group-item-action.flex-column.align-items-start",[
          m("img.col-xs-4[src="+item.image_url+"][height=100]"),
          m("div.d-flex.w-100.justify-content-between", [
            m("h5.mb-1", item.name),
            m("button.btn.btn-primary", {
              onclick: m.withAttr("value", ListComponent.handleClick),
              value: item.id
            }, ListComponent.renderGoing(item.id))
          ]),
          m("p.mb-1", "tel: "+item.display_phone+"| rating: "+item.rating+"| price: "+item.price)
        ]);
      })
    ]);
    return m('div','ciao');
  }

  /*
  <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">List group item heading</h5>
        <small>3 days ago</small>
      </div>
      <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
      <small>Donec id elit non mi porta.</small>
    </a>
  */

}
module.exports = ListComponent;
