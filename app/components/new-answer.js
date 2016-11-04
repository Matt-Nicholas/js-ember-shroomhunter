import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer() {
     var params = {
       author: this.get('author'),
       content: this.get('content'),
       question: this.get('question'),
       rating: 0
     };
     this.sendAction('saveAnswer', params);
   }
  }
});
