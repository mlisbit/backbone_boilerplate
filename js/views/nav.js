define([
  'jquery',
  'underscore',
  'backbone',
  'globals',
  'events',
  'text!templates/nav.html',
], function($, _, Backbone, Globals, events,template){

  var View = Backbone.View.extend({
    el                : '#nav',
    NAV_ICON_SELECTOR : '.navicon',
    SHOW_NAV_CLASS    : 'open',

    initialize: function() {
        events.on('nav:render', this.render, this);
    },

    toggleMenu: function() {
        $(NAV_ICON_SELECTOR).toggleClass(SHOW_NAV_CLASS);
    },

    render: function(options) {
      var the_template = _.template( template );
      events.trigger("dashboard:renderSubView", {self: this, template: the_template, options: {}});
    },
  });

  return new View();
});