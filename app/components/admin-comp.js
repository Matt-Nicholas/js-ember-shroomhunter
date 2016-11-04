import Ember from 'ember';

export default Ember.Component.extend({

adminServices: Ember.inject.service(),


actions:{
  testLog(){
    console.log(adminIsLoggedIn());
  },
  adminLogIn(){
    var username = this.get('username');
    var password = this.get('password');
    this.get('adminServices').logIn(username, password);
  },
  adminLogOut(){
    this.get('adminServices').logOut();
  }
 }
});
