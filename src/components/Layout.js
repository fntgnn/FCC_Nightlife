var m = require("mithril");
var User = require('../models/User');

var Layout = {
  handleClick: function(){
    User.toggleAuthentication();
  },

  renderSignIn: function(){
    return User.authenticated ? "Sign Out" : "Sign In";
  },

  view: function(vnode){
    return m('div',[
      m("nav.navbar.navbar-light", [
        m("a.navbar-brand[href='/']", {oncreate: m.route.link}, "Home"),
        m("ul.nav.navbar-nav.pull-right",[
          m("li.btn.btn-success", {
            //oncreate: m.route.link,
            onclick: Layout.handleClick
          }, Layout.renderSignIn()),
          //m("a.navbar-item[href='#']", {oncreate: m.route.link}, "Sign out"),
        ])
      ]),
      m("section", vnode.children)
    ]);
  }
};

module.exports = Layout;
