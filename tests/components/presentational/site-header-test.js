import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Component | Presentational | <SiteHeader />', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<SiteHeader />`);
    assert.equal(this.element.querySelector('h1.site-title').textContent.trim(), 'The Office (US) VOSTFR');
  });
});
