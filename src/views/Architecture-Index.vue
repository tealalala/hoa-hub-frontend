<template>
  <div class="architectureIndex">
    <div class="container">
      <h1>Architecture Change Index</h1>

      <button class="btn btn-primary create-request" v-on:click="createRequest()">Create a Request</button>

      <!-- <div v-for="action in filterBy(filtered_architecture_is_true, true, 'is_architecture')"> -->
      <div v-for="action in filtered_architecture_is_true">
        <p>property_address_id: {{ action.property_address_id }}</p>
        <p>category: {{ action.category }}</p>
        <p>description: {{ action.door }}</p>
        <p>user_id: {{ action.user_id }}</p>
        <p>date_open: {{ action.date_open }}</p>
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
      filtered_architecture_is_true: {},
      errors: []
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/filtered_architecture_is_true').then(function(response) {
      console.log(response.data);
      this.filtered_architecture_is_true = response.data;
    }.bind(this))
  },
  methods: {
    submit: function() {
      var params = {
        property_address_id: this.property_address_id,
        description: this.description,
        date_proposed: this.date_proposed,
        status: false
      };
      axios
        .get("http://localhost:3000/api/filtered_architecture_is_true", params)
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
