import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | contenedor', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Contenedor />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Contenedor>
        template block text
      </Contenedor>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
