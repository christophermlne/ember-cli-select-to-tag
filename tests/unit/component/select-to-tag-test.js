import Ember from 'ember';
import { test, moduleForComponent } from 'ember-qunit';

moduleForComponent('select-to-tag', {
  unit: true
});


test('should exist', function(assert) {
  expect(1);
  var component = this.subject();

  assert.ok(component, 'the world should not blow up');
});

test('opening and closing the menu', function(assert) {
  expect(2);

  var component = this.subject();

  Ember.run(function() {
    component.openMenu();
  });
  assert.equal(component.get('isOpen'), true, 'menu should be open');

  Ember.run(function() {
    component.closeMenu();
  });
  assert.equal(component.get('isOpen'), false, 'menu should be closed');
});

test('initialization', function(assert) {
  expect(3);

  var component = this.subject();

  assert.equal(component.get('isOpen'), false, 'isOpen should be false');
  assert.equal(component.get('hasSelection'), false, 'hasSelection should be false');
  assert.equal(component.get('itemSelected'), null, 'itemSelected should be empty');
});

test('clearing the selection', function(assert) {
  expect(2);

  var component = this.subject();

  Ember.run(function() {
    component.send('clearSelection');
  });

  assert.equal(component.get('hasSelection'), false, 'should set flag to indicate it has no selection');
  assert.equal(component.get('itemSelected'), null, 'should discard reference to any selected item');
});

test('setting the selection', function(assert) {
  expect(2);

  var component = this.subject();

  Ember.run(function() {
    component.send('setSelection', 'hello world');
  });

  assert.equal(component.get('hasSelection'), true, 'should set flag to indicate it has selection');
  assert.equal(component.get('itemSelected'), 'hello world', 'should hold a reference to the selection');
});
