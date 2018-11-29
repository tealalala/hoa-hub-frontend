<template>
  <div class="architectureChangeCreate">
    <div class="container">
      <h1>Create Architecture Change Request</h1>

      <!-- Request Form -->
      <form v-on:submit.prevent="submit()">
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Property Address:</label>
          <!-- <input type="text" class="form-control" v-model="action_by_address_users.property_address_id" placeholder="property address" readonly> -->
          <!-- <div v-model="action_by_address_users.property_address_id"></div> -->
        </div>
        <div class="form-group">
          <label>Date Proposed:</label>
          <input type="text" class="form-control" v-model="action_by_address_users.date_proposed" placeholder="today's date" readonly>
        </div>
        <div class="form-group">
          <label>Description:</label>
          <!-- <input type="text" class="form-control" v-model="description"> -->
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="action_by_address_users.description"></textarea>
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>

      <div class="application-status" v-for="action in action_by_address_users">
        <p>property_address_id: {{ action.category }} test</p>
        <p></p>
      </div>

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
      errors: []
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/action_by_address_users').then(function(response) {
      console.log(response.data);
      this.products = response.data;
    }.bind(this))
  },
  methods: {
    submit: function() {
      var params = {
        property_address_id: this.property_address_id,
        description: this.description,
        date_proposed: this.date_proposed,
        architecture: true,
        status: false
      };
      axios
        .get("http://localhost:3000/api/action_by_address_users", params)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  },
  computed: {}
};
</script>
