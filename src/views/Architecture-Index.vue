<template>
  <div class="architectureIndex">
    <div class="container">
      <h1>Architecture Change Index</h1>

      <button class="btn btn-primary create-request" v-on:click="createRequest()">Create a Request</button>

      <div v-for="action in action_by_address_users">
        <p>property_address_id: {{ action.category }} test</p>
        <p>description: {{ action.door }} test</p>
        <p>user_id: {{ action.user_id }} test</p>
        <hr>
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
      this.action_by_address_users = response.data;
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
    },
    createRequest: function() {
      this.$router.push("/architecture-new");
    }
  },
  computed: {}
};
</script>
