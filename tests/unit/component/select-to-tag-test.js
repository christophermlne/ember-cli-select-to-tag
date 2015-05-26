import Ember from 'ember';
import { test, moduleForComponent } from 'ember-qunit';

moduleForComponent('select-to-tag');

test('should exist', function(assert) {
  var component = this.subject();
  assert.ok(component);
});

test('should not not be open for the first time', function(assert) {
  var component = this.subject();

  assert.equal(component.get('isOpen'), false);
});

test('will open menu when told', function(assert) {
  var component = this.subject();

  Ember.run(function() {
    component.openMenu();
  });
  assert.equal(component.get('isOpen'), true, 'menu should be open');
});

test('will close menu when told', function(assert) {
  var component = this.subject();

  Ember.run(function() {
    component.closeMenu();
  });
  assert.equal(component.get('isOpen'), false, 'menu should be closed');
});

test('should not have a selection for the first time', function(assert) {
  var component = this.subject();

  assert.equal(component.get('hasSelection'), false);
});

test('should not contain a selected item for this first time', function(assert) {
  var component = this.subject();

  assert.equal(component.get('itemSelected'), null);
});

test('clearing the selection', function(assert) {
  var component = this.subject();

  Ember.run(function() {
    component.send('clearSelection');
  });

  assert.equal(component.get('hasSelection'), false, 'should set flag to indicate it has no selection');
  assert.equal(component.get('itemSelected'), null, 'should discard reference to any selected item');
});
test('should set the selected item', function(assert) {
  var component = this.subject();

  Ember.run(function() {
    component.send('setSelection', 'hello world');
  });

  assert.equal(component.get('hasSelection'), true);
  assert.equal(component.get('itemSelected'), 'hello world');
});
