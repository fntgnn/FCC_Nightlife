var m = require("mithril");

var Locations = require("../models/Locations");

var ListComponent = {

  view: function(vnode){
    const locations = Locations.locations;
    console.log(locations)
    return m("div.list-group",[
      locations.map(function(item){
        return m("a.list-group-item.list-group-item-action.flex-column.align-items-start",[
          m("img.col-xs-4[src="+item.image_url+"][height=100]"),
          m("div.d-flex.w-100.justify-content-between", [
            m("h5.mb-1", item.name),
            m("button.btn.btn-primary","... going")
          ]),
          m("p.mb-1", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."),
          m("small", "tel: "+item.display_phone),
          m("small", "| rating: "+item.rating),
          m("small", "| price: "+item.price),
        ]);
      })
    ]);
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
