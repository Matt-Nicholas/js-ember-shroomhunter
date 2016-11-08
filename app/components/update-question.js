import Ember from 'ember';

export default Ember.Component.extend({
  adminServices: Ember.inject.service('admin-services'),

  updateQuestionForm: false,

  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    update(question) {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        date: this.get('date'),
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});
