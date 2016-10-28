import Ember from 'ember';

export default Ember.Component.extend({

    actions: {
      saveQuestion() {
        var params = {
          content: this.get('content'),
          author: this.get('author'),
          date: this.get('date'),
        };
        this.sendAction('saveQuestion', params);
      }
    }
});
