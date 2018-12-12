import { module, test } from 'qunit';
import { currentURL, find, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Application | pages access', function(hooks) {
  setupApplicationTest(hooks);

  async function assertPageAccess(assert, pageUrl) {
    await visit(pageUrl);
    assert.equal(currentURL(), pageUrl, `the current url is '${pageUrl}'`);
  }

  test('visiting /', async function(assert) {
    await assertPageAccess(assert, '/')
    assert.equal(find('.site-title').textContent.trim(), 'The Office (US) VOSTFR', 'the site title is displayed')
  });

  test("visiting 'about-show' route", async function(assert) {
    await assertPageAccess(assert, '/about-show')
    assert.equal(find('.text-page_title').textContent.trim(), "C'est quoi cette série ?", 'the first page title is displayed')
  });

  test("visiting 'episodes' route", async function(assert) {
    await assertPageAccess(assert, '/episodes')
    assert.equal(find('.episodes-selection h2').textContent.trim(), "Selection des épisodes", 'the first page title is displayed')
  });

  test("visiting 'about-site' route", async function(assert) {
    await assertPageAccess(assert, '/about-site')
    assert.equal(find('.text-page_title').textContent.trim(), "Pourquoi ce site ?", 'the first page title is displayed')
  });
});
