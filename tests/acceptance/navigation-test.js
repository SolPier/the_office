import { module, test } from 'qunit';
import { currentURL, find, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Application | Pages access', function(hooks) {
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

module('Application | Navigation links', function(hooks) {
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
