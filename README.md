Backbone boilerplate code:
----------

- working code with Backbone, requirejs, and sass
- watchers to watch for sass changes and live reload them
- git precommit hooks to auto build jsdoc documentation into markdown.
- animated page transitions
- testing with Mochajs, Chai, and Squirejs (for requirejs dependency injection)
- building the code via grunt
- css autoprefixing

requirements:
-----
- bower
- node (for the precommit hooks)
- npm

getting started:
-----
```
cp -R .hooks/* .git/hooks/
npm i
bower install
```

grunt commands:
-----
- build your code: `grunt build`
- start a static server: `grunt serve`
- watch for sass changes: `grunt watch`
- build the docs: `grunt docs`

running tests:
-----
just visit the url `/tests`.
