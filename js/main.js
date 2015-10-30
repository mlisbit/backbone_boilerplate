require.config({
  paths: {
    'jquery'      : '../bower_components/jquery/dist/jquery',
    'underscore'  : '../bower_components/underscore/underscore',
    'backbone'    : '../bower_components/backbone/backbone',
    'text'        : '../bower_components/text/text',
    'templates'   : '../templates',
    'globals'     : 'globals',
    'events'      : 'events',
  },
  'shim': {
    'backbone': {
      'deps': ['jquery', 'underscore'],
      'exports': 'Backbone'
    },
    'underscore': {
      'exports': '_'
    },
  }
});

require([
  'underscore',
  'backbone',
  'app'
  ],
  function(_, Backbone, app){
    app.init();
});