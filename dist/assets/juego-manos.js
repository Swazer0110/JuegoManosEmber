'use strict';



;define("juego-manos/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("juego-manos/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "juego-manos/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends _application.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("juego-manos/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("juego-manos/components/contenedor", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@ember/object"], function (_exports, _component, _templateFactory, _component2, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{yield}}
  <body>
  <div class="vv">
      <div id="container">
          <img src="assets/closed1.png" style="width:200px" id="1" {{on 'click' (fn this.showHand 1)}}>
          <img src="assets/closed2.png" style="width:200px" id="2" {{on 'click' (fn this.showHand 2)}}>
              <ul id="list">
                  <br>
                  <div id="rainbow">
                  <li >Puntos Jugador: <nobr id="Jugador">0</nobr></li>
                  <li>Puntos IA: <nobr id="IA">0</nobr></li>
                  </div>
                  <li><button id="r" type="button" {{on 'click' this.reiniciar}}>Reiniciar</button> <button id="r" type="button" {{on 'click' this.pista}}>Pista</button></li>
              </ul>
      </div>
  </div>
  </body>
  <style>
  img:hover{
      width:400px;
  }
  li{
      padding: 5px;
  }
  .vv{
      display: flex;
      height: 100vh;
      
  }
  #rainbow{
      background-image:linear-gradient(to right, red, orange, rgba(168, 168, 7, 0.568), green, blue, indigo, violet);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: move 160s linear infinite;
  }
  @keyframes move{
      to{
          background-position: 4500vh;
      }
  }
  #container{
      display: grid;
      grid-template-columns: 300px 300px 300px;
      background-color: bisque;
      padding: 30px;
      width: 3000px;
      align-items: center;
      justify-content: center;
  }
  ul{
      list-style-type: none;
  }
  </style>
  
  */
  {
    "id": "9PSKzai2",
    "block": "[[[18,1,null],[1,\"\\n\"],[10,\"body\"],[12],[1,\"\\n\"],[10,0],[14,0,\"vv\"],[12],[1,\"\\n    \"],[10,0],[14,1,\"container\"],[12],[1,\"\\n        \"],[11,\"img\"],[24,\"src\",\"assets/closed1.png\"],[24,5,\"width:200px\"],[24,1,\"1\"],[4,[38,1],[\"click\",[28,[37,2],[[30,0,[\"showHand\"]],1],null]],null],[12],[13],[1,\"\\n        \"],[11,\"img\"],[24,\"src\",\"assets/closed2.png\"],[24,5,\"width:200px\"],[24,1,\"2\"],[4,[38,1],[\"click\",[28,[37,2],[[30,0,[\"showHand\"]],2],null]],null],[12],[13],[1,\"\\n            \"],[10,\"ul\"],[14,1,\"list\"],[12],[1,\"\\n                \"],[10,\"br\"],[12],[13],[1,\"\\n                \"],[10,0],[14,1,\"rainbow\"],[12],[1,\"\\n                \"],[10,\"li\"],[12],[1,\"Puntos Jugador: \"],[10,\"nobr\"],[14,1,\"Jugador\"],[12],[1,\"0\"],[13],[13],[1,\"\\n                \"],[10,\"li\"],[12],[1,\"Puntos IA: \"],[10,\"nobr\"],[14,1,\"IA\"],[12],[1,\"0\"],[13],[13],[1,\"\\n                \"],[13],[1,\"\\n                \"],[10,\"li\"],[12],[11,\"button\"],[24,1,\"r\"],[24,4,\"button\"],[4,[38,1],[\"click\",[30,0,[\"reiniciar\"]]],null],[12],[1,\"Reiniciar\"],[13],[1,\" \"],[11,\"button\"],[24,1,\"r\"],[24,4,\"button\"],[4,[38,1],[\"click\",[30,0,[\"pista\"]]],null],[12],[1,\"Pista\"],[13],[13],[1,\"\\n            \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[10,\"style\"],[12],[1,\"\\nimg:hover{\\n    width:400px;\\n}\\nli{\\n    padding: 5px;\\n}\\n.vv{\\n    display: flex;\\n    height: 100vh;\\n    \\n}\\n#rainbow{\\n    background-image:linear-gradient(to right, red, orange, rgba(168, 168, 7, 0.568), green, blue, indigo, violet);\\n    -webkit-background-clip: text;\\n    -webkit-text-fill-color: transparent;\\n    animation: move 160s linear infinite;\\n}\\n@keyframes move{\\n    to{\\n        background-position: 4500vh;\\n    }\\n}\\n#container{\\n    display: grid;\\n    grid-template-columns: 300px 300px 300px;\\n    background-color: bisque;\\n    padding: 30px;\\n    width: 3000px;\\n    align-items: center;\\n    justify-content: center;\\n}\\nul{\\n    list-style-type: none;\\n}\\n\"],[13],[1,\"\\n\"]],[\"&default\"],false,[\"yield\",\"on\",\"fn\"]]",
    "moduleName": "juego-manos/components/contenedor.hbs",
    "isStrictMode": false
  });

  var mano = Math.floor(Math.random() * 2);
  let Contenedor = (_class = class Contenedor extends _component2.default {
    showHand(id) {
      var h = id - 1;

      if (mano != h) {
        document.getElementById('Jugador').innerHTML = Number(document.getElementById('Jugador').innerHTML) + 1;
      } else {
        document.getElementById('IA').innerHTML = Number(document.getElementById('IA').innerHTML) + 1;
      }

      if (mano == 0) {
        document.getElementById('1').src = 'assets/left.png';
        document.getElementById('2').src = 'assets/llave.png';
      } else if (mano == 1) {
        document.getElementById('1').src = 'assets/llave.png';
        document.getElementById('2').src = 'assets/right.png';
      }

      mano = Math.floor(Math.random() * 2);
      setTimeout(function () {
        document.getElementById('1').src = 'assets/closed1.png';
        document.getElementById('2').src = 'assets/closed2.png';
      }, 2000);
    }

    pista() {
      if (mano == 0) {
        var str = 'derecha';
      } else {
        var str = 'izquierda';
      }

      alert("La llave esta en la mano " + str);
    }

    reiniciar() {
      document.getElementById('Jugador').innerHTML = '0';
      document.getElementById('IA').innerHTML = '0';
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "showHand", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "showHand"), _class.prototype)), _class);
  _exports.default = Contenedor;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, Contenedor);
});
;define("juego-manos/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("juego-manos/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("juego-manos/helpers/app-version", ["exports", "@ember/component/helper", "juego-manos/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_) {
    let hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = (0, _helper.helper)(appVersion);

  _exports.default = _default;
});
;define("juego-manos/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("juego-manos/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("juego-manos/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("juego-manos/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "juego-manos/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("juego-manos/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
    }

  };
  _exports.default = _default;
});
;define("juego-manos/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("juego-manos/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("juego-manos/initializers/export-application-global", ["exports", "ember", "juego-manos/config/environment"], function (_exports, _ember, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("juego-manos/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',

    initialize() {}

  };
  _exports.default = _default;
});
;define("juego-manos/router", ["exports", "@ember/routing/router", "juego-manos/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends _router.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {});
});
;define("juego-manos/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("juego-manos/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("juego-manos/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("juego-manos/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
});
;define("juego-manos/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
});
;define("juego-manos/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("juego-manos/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "rC7jmpQI",
    "block": "[[[1,[28,[35,0],[\"JuegoManos\"],null]],[1,\"\\n\"],[8,[39,1],null,null,null],[1,\"\\n\"],[46,[28,[37,3],null,null],null,null,null]],[],false,[\"page-title\",\"contenedor\",\"component\",\"-outlet\"]]",
    "moduleName": "juego-manos/templates/application.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("juego-manos/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("juego-manos/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("juego-manos/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("juego-manos/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('juego-manos/config/environment', [], function() {
  var prefix = 'juego-manos';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("juego-manos/app")["default"].create({"name":"juego-manos","version":"0.0.0+8461781c"});
          }
        
//# sourceMappingURL=juego-manos.map
