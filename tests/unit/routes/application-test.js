import { module, test } from 'qunit';
import { setupTest } from 'anne-greeth/tests/helpers';

module('Unit | Route | application', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:application');
    assert.ok(route);
  });
});
