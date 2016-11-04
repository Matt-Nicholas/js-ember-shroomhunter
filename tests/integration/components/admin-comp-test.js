import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('admin-comp', 'Integration | Component | admin comp', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{admin-comp}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#admin-comp}}
      template block text
    {{/admin-comp}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
