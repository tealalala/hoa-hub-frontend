<template>
  <div class="architectureCreate">
    <div class="container">
      <h1>Create Architecture Change Request</h1>

      <!-- Request Form -->
      <form v-on:submit.prevent="submit()">
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Property Address:</label>
          <input type="text" class="form-control" v-model="newArchitecture.property_address_id">
          <!-- <div v-model="action_by_address_users.property_address_id"></div> -->
        </div>
        <div class="form-group">
          <label>Date Proposed:</label>
          <input type="text" class="form-control" v-model="newArchitecture.date_proposed">
        </div>
        <div class="form-group">
          <label>Description:</label>
          <!-- <input type="text" class="form-control" v-model="description"> -->
          <textarea class="form-control" rows="3" v-model="newArchitecture.description"></textarea>
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>

      <!-- <div class="application-status" v-for="action in action_by_address_users">
        <p>property_address_id: {{ action.category }} test</p>
        <p></p>
      </div> -->

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
      action_by_address_users: {},
      newArchitecture: {
        property_address_id: "",
        date_proposed: "",
        description: ""
      },
      errors: []
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/action_by_address_users').then(function(response) {
      console.log(response.data);
      this.action_by_address_user = response.data;
    }.bind(this))
  },
  methods: {
    submit: function() {
      var params = {
        property_address_id: this.newArchitecture.property_address_id,
        description: this.newArchitecture.description,
        date_open: this.newArchitecture.date_proposed,
        is_architecture: true,
        status: false,
        category: null,
        is_violation: false,
        is_vote: true,
        user_id: 6,
        property_address_id: 1,
        bylaw_id: null,
        ccr_id: null,
      };
      axios
        .post("http://localhost:3000/api/action_by_address_users", params)
        .then(response => {
          console.log("submit button is clicked");
          console.log(response.data);
          this.action_by_address_user.push(response.data);
          this.errors = [];
        })
        .catch(error => {
          console.log('catch function');
          console.log(errors.response);
          this.errors = errors.response.data.errors;
        });
      console.log("new architecture submit is a success");
    }
  },
  computed: {}
};
</script>
