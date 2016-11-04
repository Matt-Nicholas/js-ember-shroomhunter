import Ember from 'ember';

export default Ember.Component.extend({

adminServices: Ember.inject.service(),

adminIsLoggedIn: Ember.computed(function(){
  console.log("**  " + `${this.get('adminServices').loggedIn}`);
  return `${this.get('adminServices').loggedIn}`
}),

actions:{
  testLog(){
    console.log(adminIsLoggedIn);
  },
  adminLogIn(){
    console.log("admin-comp*****");

    var username = this.get('username');
    var password = this.get('password');
    this.get('adminServices').logIn(username, password);
  },
  adminLogOut(){
    this.get('adminServices').logOut();
  },
  displayAdminInfo(){
    this.get('adminServices').displayAdminInfo();
  },
}
});
