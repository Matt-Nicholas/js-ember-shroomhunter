import Ember from 'ember';

export default Ember.Component.extend({
  adminServices: Ember.inject.service('admin-services'),
  
  actions: {
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
