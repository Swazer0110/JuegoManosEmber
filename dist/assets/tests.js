'use strict';

define("juego-manos/tests/integration/components/contenedor-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | contenedor', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Contenedor />
      */
      {
        "id": "H2W2OXVr",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"contenedor\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Contenedor>
              template block text
            </Contenedor>
          
      */
      {
        "id": "axbwLp2Z",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"contenedor\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("juego-manos/tests/test-helper", ["juego-manos/app", "juego-manos/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.start)();
});
define("juego-manos/tests/unit/initializers/vars-test", ["@ember/application", "juego-manos/config/environment", "juego-manos/initializers/vars", "qunit", "ember-resolver", "@ember/runloop"], function (_application, _environment, _vars, _qunit, _emberResolver, _runloop) {
  "use strict";

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  (0, _qunit.module)('Unit | Initializer | vars', function (hooks) {
    hooks.beforeEach(function () {
      this.TestApplication = class TestApplication extends _application.default {
        constructor() {
          super(...arguments);

          _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

          _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

          _defineProperty(this, "Resolver", _emberResolver.default);
        }

      };
      this.TestApplication.initializer({
        name: 'initializer under test',
        initialize: _vars.initialize
      });
      this.application = this.TestApplication.create({
        autoboot: false
      });
    });
    hooks.afterEach(function () {
      (0, _runloop.run)(this.application, 'destroy');
    }); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it works', async function (assert) {
      await this.application.boot();
      assert.ok(true);
    });
  });
});
define("juego-manos/tests/unit/instance-initializers/variables-test", ["@ember/application", "juego-manos/config/environment", "juego-manos/instance-initializers/variables", "qunit", "ember-resolver", "@ember/runloop"], function (_application, _environment, _variables, _qunit, _emberResolver, _runloop) {
  "use strict";

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  (0, _qunit.module)('Unit | Instance Initializer | variables', function (hooks) {
    hooks.beforeEach(function () {
      this.TestApplication = class TestApplication extends _application.default {
        constructor() {
          super(...arguments);

          _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

          _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

          _defineProperty(this, "Resolver", _emberResolver.default);
        }

      };
      this.TestApplication.instanceInitializer({
        name: 'initializer under test',
        initialize: _variables.initialize
      });
      this.application = this.TestApplication.create({
        autoboot: false
      });
      this.instance = this.application.buildInstance();
    });
    hooks.afterEach(function () {
      (0, _runloop.run)(this.instance, 'destroy');
      (0, _runloop.run)(this.application, 'destroy');
    }); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it works', async function (assert) {
      await this.instance.boot();
      assert.ok(true);
    });
  });
});
define('juego-manos/config/environment', [], function() {
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

require('juego-manos/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
