import Ember from 'ember';

export default Ember.Route.extend({
  adminServices: Ember.inject.service(),



  model(){
    if(!this.get('adminServices').loggedIn){
      var email = prompt("Enter your email to join our mailing list");
    }

    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
  },
  actions: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    }
  }
});
