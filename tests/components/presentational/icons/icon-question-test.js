import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Component | Presentational | <IconQuestion />', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<IconQuestion />`);
    assert.ok(this.element.children.item(0).classList.contains('icon-question'), "top node has class 'icon-question'")
  });

  test('it uses html attributes', async function(assert) {
    await render(hbs`<IconQuestion class='test' />`);
    assert.ok(this.element.children.item(0).classList.contains('icon-question'), "top node still has class 'icon-question'")
    assert.ok(this.element.children.item(0).classList.contains('test'), "top node has class 'test'")
  });
});
