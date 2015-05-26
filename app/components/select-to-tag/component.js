import Ember from 'ember';

export default Ember.Component.extend({
  isOpen: false,
  hasSelection: false,
  openMenu: function() {
    this.set('isOpen', true);
  },
  closeMenu: function() {
    this.set('isOpen', false);
  },
  actions: {
    setSelection: function(data) {
      this.set('hasSelection', true);
      this.set('itemSelected', data);
    },
    clearSelection: function() {
      this.set('hasSelection', false);
      this.set('itemSelected', null);
    }
  }
});
