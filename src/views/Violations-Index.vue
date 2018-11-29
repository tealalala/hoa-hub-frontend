<template>
  <div class="violationsIndex">
    <div class="container">
      <h1>Violations Index</h1>

      <div v-for="action in filterBy(action_by_address_users, true, 'is_violation')">
        <p>violation category: {{ action.category }} test</p>
        <p>status: {{ action.status }} test</p>
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
  methods: {},
  computed: {}
};
</script>
