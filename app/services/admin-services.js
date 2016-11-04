import Ember from 'ember';

export default Ember.Service.extend({

  loggedIn: false,
  adminUsername: 'username',
  adminPassword: 'password',



  logIn(u,p) {
    console.log("in dafunk");
    if((this.get('adminUsername') === u) && (this.get('adminPassword') === p)) {
      this.set('adminLoggedIn', true);
    } else {
      alert("The username or password you entered was incorrect.");
    }
  },

  logOut() {
    this.set('adminLoggedIn', false);
  },

  displayAdminInfo(){
    alert('Username: "username"\nPassword: "password"')
  }
});
