// This is the main entry point for the App
define([
  'router',
], function(router){

  var init = function(){
    this.router = new router();
  };
  return { init: init };
});