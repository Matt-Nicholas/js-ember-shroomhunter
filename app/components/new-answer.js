import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer() {
     var params = {
       author: this.get('author'),
       content: this.get('content'),
       question: this.get('question'),
       rating: parseInt(this.get('rating'))
     };
     this.sendAction('saveAnswer', params);
   }
  }
});
