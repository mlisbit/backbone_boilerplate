require.config({
  //baseUrl: "/",
  urlArgs: 'cb=' + Math.random(),
  paths: {
    jquery      : '../bower_components/jquery/dist/jquery',
    underscore  : '../bower_components/underscore/underscore',
    backbone    : '../bower_components/backbone/backbone',
    text        : '../bower_components/text/text',
    templates   : '../templates',
    globals     : '../js/globals',
    events      : '../js/events',
    squire      : 'bower_components/Squire.js/src/Squire',
    mocha       : 'bower_components/mocha/mocha',
    chai        : 'tests/lib/chai',
    sinon       : 'tests/lib/sinon-1.4.2',
    spec        : 'tests/spec',
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    select2: {
        deps    : ["jquery"],
        exports : "jquery"
    },
    mocha: {
      exports: 'mocha'
    },
    chai: {
      exports: 'chai'
    },
    sinon: {
      exports: "sinon"
    }
  }
});

require(['underscore', 'jquery', 'mocha', 'chai', 'sinon'], function(_, $, mocha, chai, sinon) {

  // Chai
  this.assert = chai.assert;
  this.expect = chai.expect;

  // Mocha
  mocha.setup({ui: 'bdd', ignoreLeaks: true});

  var specs = [];

  specs.push('spec/test');
  specs.push('spec/globals');
  specs.push('spec/dashboard');
  //specs.push('spec/searchBar');


  require(specs, function(){
    $(function(){
      mocha.run();//.globals(['Backbone']);
    });
  });

});