import Ember from 'ember';

export function questionCounter(params) {
  var question = params[0];

  if(question.get('answers').get('length') <= 0){
    return Ember.String.htmlSafe('<p><small>Be the first to answer this question!</small></p>')
  }
}

export default Ember.Helper.helper(questionCounter);
