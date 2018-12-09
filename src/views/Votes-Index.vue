<template>
  <div class="votesIndex">
    <div class="container">
      <h1>Voting Index</h1>

      <div v-for="action in filtered_bylaws_is_false">
        <p>id: {{ action.id }}</p>
        <p>status: {{ action.status }}</p>
        <p>section: {{ action.section }}</p>
        <p>description: {{ action.description }}</p>
        <p>date_proposed: {{ action.date_proposed }}</p>
        <p>association_mgmt_id: {{ action.association_management_id }}</p>

        <span class="button-space"><button class="btn btn-primary" v-on:click="voteUp(action)">Vote Up</button></span>
        <span class="button-space"><button class="btn btn-primary" v-on:click="voteDown(action)">Vote Down</button></span>
        <hr>
      </div>

      <span class="button-space"><button class="btn btn-primary" v-on:click="fetchUser()">Fetch User</button></span>

    </div>
  </div>
</template>

<style>
.button-space {
  margin: 20px;
}
</style>

<script>
import axios from 'axios'
import Vue2Filters from 'vue2-filters'

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      user: [],
      filtered_bylaws_is_false: [],
      errors: []
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/filtered_bylaws_is_false').then(function(response) {
      this.filtered_bylaws_is_false = response.data;
    }.bind(this))
  },
  methods: {
    fetchUser: function() {
      axios.get('http://localhost:3000/api/users')
        .then(response => {
          this.user = response.data;
          console.log('user was fetched');
        })
        .catch(error => {
          alert('Something went wrong');
          console.error(error.response.data);
        });
    },
    voteUp: function(inputAction) {
      console.log(inputAction);
      var params = {
        category: inputAction.section,
        description: inputAction.description,
        status: null,
        date_open: inputAction.date_proposed,
        is_architecture: false,
        is_violation: false,
        is_vote: true,
        user_id: inputAction.current_user.id,
        property_address_id: inputAction.current_user.property_address_id,
        bylaw_id: inputAction.id,
        ccr_id: null,
      };
      axios
        .post("http://localhost:3000/api/action_by_address_users/", params)
        .then(response => {
          console.log('voteUp function clicked');
          console.log(params);
          console.log(response.data);
          this.action_by_address_user.push(response.data);
          this.errors = [];
        })
        .catch(error => {
          console.log('catch function');
          console.log(errors.response);
          this.errors = errors.response.data.errors;
        })
        console.log("voteUp completed");
    },
    voteDown: function(inputAction) {
      console.log(inputAction);
      var params = {
        category: inputAction.section,
        description: inputAction.description,
        status: null,
        date_open: inputAction.date_proposed,
        is_architecture: false,
        is_violation: false,
        is_vote: false,
        user_id: current_user.id,
        property_address_id: current_user.property_address_id,
        bylaw_id: inputAction.id,
        ccr_id: null,
      };
      axios
        .post("http://localhost:3000/api/action_by_address_users/", params)
        .then(response => {
          console.log('voteDown function clicked');
          console.log(params);
          console.log(response.data);
          this.action_by_address_user.push(response.data);
          this.errors = [];
        })
        .catch(error => {
          console.log('catch function');
          console.log(errors.response);
          this.errors = errors.response.data.errors;
        })
        console.log("voteDown completed");
    },
  }
};
</script>
