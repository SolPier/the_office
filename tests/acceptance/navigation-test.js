import { module, test } from 'qunit';
import { currentURL, find, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Application | navigation', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/', "the current url is '/'");
    assert.equal(find('.site-title').textContent.trim(), 'The Office (US) VOSTFR', 'the site title is displayed')
  });

  test("visiting 'about-show' route", async function(assert) {
    await visit('/about-show');
    assert.equal(currentURL(), '/about-show', "the current url is '/about-show'");
    assert.equal(find('.text-page_title').textContent.trim(), "C'est quoi cette série ?", 'the first page title is displayed')
  });

  test("we can navigate from the main page and return", async function(assert) {
    await visit('/');
    assert.equal(find('a.-link-about-show').pathname, '/about-show', "'about-show' navigation link is displayed")
    await visit('/about-show');
    assert.equal(find('a.site-header-container_link').pathname, '/', "'/' navigation link is displayed on 'about-show'")
    assert.equal(find('a.site-header-container_link .site-title').textContent.trim(), 'The Office (US) VOSTFR', "'/' navigation link has the right text on 'about-show'")
  });
});
