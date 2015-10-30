define([
    'jquery',
    'backbone',
    'underscore',
    'globals',
    'views/dashboard',
    'views/nav',
    'views/home',
    'views/child',
],
function( $, Backbone, _, Globals, dashboard, nav, home, child) {
  var Router = Backbone.Router.extend({

    initialize: function(){
      var options = {};
      this.dashboardView  = dashboard;
      this.home           = home;
      this.child          = child;
      Backbone.history.start();
      options.view = "nav";
      this.dashboardView.render(options);
    },

    routes: {
      '': 'home',
      'home': 'home',
      'child': 'child',
    },

    'home': function(){
      var options = {};
      options.view = "home";
      this.dashboardView.render(options);
    },

    'child': function() {
      var options = {};
      options.view = "child";
      this.dashboardView.render(options);
    },
  });
  return Router;
});