define([
  'jquery',
  'underscore',
  'backbone',
  'globals',
  'events',
  'text!templates/dashboard.html',
], function($, _, Backbone, Globals, events, template){

  var View = Backbone.View.extend({
    el: '#main',

    initialize: function() {
      events.on('dashboard:renderSubView', this.renderSubview, this);
      events.on('dashboard:clear', this.clearBoards);
      var the_template = _.template( template );
      this.$el.html(the_template({}));
    },

    events: {},

    goTo: function() {

    },

    renderSubview : function(options) {
      options.self.setElement(options.self.$el.selector);
      $(options.self.$el.selector).fadeOut('slow', function() {
        options.self.$el.html(options.template(options.options));
        $(options.self.$el.selector).fadeIn();
      });

    },

    clearBoards : function() {
      var board_list = ["#control-board-1", "#control-board-2", "#control-board-4", "#control-board-4"];
      board_list.forEach(function(board, index) {
        $(board).html('');
      });
    },

    render: function(options) {
      subviewRenderEvent = options.view+ ':render'
      events.trigger(subviewRenderEvent, options.data);
    },

  });
  return new View();
});