import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Component | Presentational | <IconTimes />', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<IconTimes />`);
    assert.ok(this.element.children.item(0).classList.contains('icon-times'), "top node has class 'icon-times'")
  });

  test('it uses html attributes', async function(assert) {
    await render(hbs`<IconTimes class='test' />`);
    assert.ok(this.element.children.item(0).classList.contains('icon-times'), "top node still has class 'icon-times'")
    assert.ok(this.element.children.item(0).classList.contains('test'), "top node has class 'test'")
  });
});
