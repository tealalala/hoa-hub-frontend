<template>
  <div class="votesIndex">
    <div class="container">
      <h1>Voting Index</h1>

      <button class="btn btn-primary create-request" v-on:click="createRequest()">Create a Request</button>

      <div v-for="action in filterBy(action_by_address_users, !null, 'bylaw_id')">
        <p>bylaw_id: {{ action.bylaw_id}}</p>
        <p>description: {{ action.door }}</p>
        <p>user_id: {{ action.user_id }}</p>
        <hr>
      </div>

    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from 'axios'
import Vue2Filters from 'vue2-filters'

export default {
  mixins: [Vue2Filters.mixin],
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
        is_architecture: true,
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
