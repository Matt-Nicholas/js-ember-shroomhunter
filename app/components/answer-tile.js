import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['rating:desc'],
  sortedAnswers: Ember.computed.sort('question.answers', 'sortBy'),

  actions:{
    upVote(answer){
      this.sendAction('upVote', answer);
    },
    downVote(answer){
      this.sendAction('downVote', answer);

    }
  }
});
