import Ember from 'ember';

export default Ember.Service.extend({

  loggedIn: false,
  adminUsername: 'fungus',
  adminPassword: 'amungus',



  logIn(u,p) {
    console.log("login " + this.loggedIn);
    if((this.get('adminUsername') === u) && (this.get('adminPassword') === p)) {
      this.set('loggedIn', true);
    } else {
      alert("The username or password you entered was incorrect.");
    }
  },

  logOut() {
    console.log("logout " + this.loggedIn);

    this.set('loggedIn', false);
  },

  displayAdminInfo(){
    alert('Username: "fungus"\nPassword: "amungus"')
  }
});
