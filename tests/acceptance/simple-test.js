import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | simple', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');
    assert.strictEqual(currentURL(), '/');
    assert.dom('h2').hasText('Welcome to Super Rentals!');

    assert.dom('.jumbo a.button').hasText('About Us');
    await click('.jumbo a.button');

    assert.strictEqual(currentURL(), '/about');
  });
  test('visiting /about', async function (assert) {
    await visit('/about');
    assert.strictEqual(currentURL(), '/about');
    assert.dom('h2').hasText('About Super Rentals');
    assert.dom('.button').hasText('Contact Us');
    await click('.button');
    assert.strictEqual(currentURL(), '/getting-in-touch');
  });
});
