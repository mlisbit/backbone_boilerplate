define([
  'jquery',
  'underscore',
  'backbone',
  'globals',
  'events',
  'text!templates/home.html',
], function($, _, Backbone, Globals, events, template){

  var View = Backbone.View.extend({
    el: '#control-board-2',

    initialize: function() {
      events.on('home:render', this.render, this);
    },

    render: function(options) {
      var the_template = _.template( template );
      events.trigger("dashboard:goToSubView", {self: this, template: the_template, options: {}})
    },
  });
  return new View();
});