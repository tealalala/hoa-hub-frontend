<template>
  <div class="userProfile">
    <div class="container">

      <form v-on:submit.prevent="submit()">
        <h1>Your Profile</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>First Name:</label>
          <input type="text" class="form-control" v-model:value="user.first_name">
        </div>
        <div class="form-group">
          <label>Middle Name:</label>
          <input type="text" class="form-control" v-model:value="user.middle_name">
        </div>
        <div class="form-group">
          <label>Last Name:</label>
          <input type="text" class="form-control" v-model:value="user.last_name">
        </div>
        <div class="form-group">
          <label>E-mail:</label>
          <input type="text" class="form-control" v-model:value="user.email">
        </div>
        <input type="submit" class="btn btn-primary" value="Update My Profile" v-on:click="updateProfile(inputUpdate)">
      </form>


    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from 'axios'

export default {
  data: function() {
    return {
      user: [],
      action_by_address_user: {},
      errors: []
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/users/' + this.$route.params.id ).then(function(response) {
      console.log(response.data);
      this.user = response.data;
    }.bind(this))
  },
  methods: {
    updateProfile: function(inputUpdate) {
      console.log(inputUpdate);
      var params = {
        first_name: inputUpdate.first_name,
        middle_name: inputUpdate.middle_name,
        last_name: inputUpdate.last_name,
        email: inputUpdate.email
      };
      axios
        .patch("http://localhost:3000/api/users/" + this.$route.params.id + '/edit', params)
        .then(response => {
          console.log('update profile function clicked');
          console.log(params);
          console.log(response.data);
          this.action_by_address_user.push(response.data);
          this.errors = [];
        })
        .catch(error => {
          console.log('catch function');
          // console.log(errors.response);
          this.errors = errors.response.data.errors;
        })
        console.log("update profile completed");
    },
  },
  computed: {}
};
</script>
