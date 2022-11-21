import { module, test } from 'qunit';
import { setupRenderingTest } from 'anne-greeth/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import MockDate from 'mockdate';

module('Integration | Helper | daysLeft', function (hooks) {
  setupRenderingTest(hooks);
  // TODO: Replace this with your real tests.
  test('it renders 364', async function (assert) {
    MockDate.set(new Date('9/20/2022'));
    await render(hbs`{{days-left}}`);
    assert.dom(this.element).hasText('364');
    MockDate.reset();
  });

  // TODO: Replace this with your real tests.
  test('it renders 1', async function (assert) {
    MockDate.set(new Date('9/18/2023'));
    await render(hbs`{{days-left}}`);
    assert.dom(this.element).hasText('1');
    MockDate.reset();
  });
});
