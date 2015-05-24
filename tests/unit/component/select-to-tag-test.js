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

// TODO this really isn't testing the correct user interaction
test('should open menu when hovered over', function(assert) {
  var component = this.subject();

  Ember.run(function() {
    component.send('openMenu');
  });
  assert.equal(component.get('isOpen'), true);
});

// TODO this really isn't testing the correct user interaction
test('should close menu when hovered over', function(assert) {
  var component = this.subject();

  Ember.run(function() {
    component.send('closeMenu');
  });
  assert.equal(component.get('isOpen'), false);
});

test('should not have a selection for the first time', function(assert) {
  var component = this.subject();

  assert.equal(component.get('hasSelection'), false);
});

test('should not contain a selected item for this first time', function(assert) {
  var component = this.subject();

  assert.equal(component.get('itemSelected'), null);
});

test('should clear the selected item', function(assert) {
  var component = this.subject();

  Ember.run(function() {
    component.send('clearSelection');
  });

  assert.equal(component.get('hasSelection'), false);
  assert.equal(component.get('itemSelected'), null);
});
test('should set the selected item', function(assert) {
  var component = this.subject();

  Ember.run(function() {
    component.send('setSelection', 'hello world');
  });

  assert.equal(component.get('hasSelection'), true);
  assert.equal(component.get('itemSelected'), 'hello world');
});
