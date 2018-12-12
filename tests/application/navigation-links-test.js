import { module, test } from 'qunit';
import { find, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Application | navigation links', function(hooks) {
  setupApplicationTest(hooks);

  test("we can navigate from the main page to the other pages", async function(assert) {
    await visit('/');
    assert.equal(find('a.-link-about-show').pathname, '/about-show', "'about-show' navigation link is displayed")
    assert.equal(find('a.-link-episodes').pathname, '/episodes', "'episodes' navigation link is displayed")
    assert.equal(find('a.-link-about-site').pathname, '/about-site', "'about-site' navigation link is displayed")
  });

  function assertHasMainLink(assert) {
    assert.equal(find('a.site-header-container_link').pathname, '/', "'/' navigation link is displayed on 'about-show'")
    assert.equal(find('a.site-header-container_link .site-title').textContent.trim(), 'The Office (US) VOSTFR', "'/' navigation link has the right text on 'about-show'")
  }

  test("we can return to the main page from 'about-show'", async function(assert) {
    await visit('/about-show');
    assertHasMainLink(assert)
  });

  test("we can return to the main page from 'episodes'", async function(assert) {
    await visit('/episodes');
    assertHasMainLink(assert)
  });

  test("we can return to the main page from 'about-site'", async function(assert) {
    await visit('/about-site');
    assertHasMainLink(assert)
  });
});
