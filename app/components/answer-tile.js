import Ember from 'ember';

export default Ember.Component.extend({


  actions:{
    upVote(answer){

      console.log(answer.rating);

      var params = {
        rating: 2,
      }
      this.sendAction('upVote', answer, params);
    },
    downVote(answer){
      answer.rating -= 1;
      console.log(answer);

    }
  }
});
