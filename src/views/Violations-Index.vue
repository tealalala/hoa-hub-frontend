<template>
  <div class="violationsIndex">
    <div class="container">
      <h1>Violations Index</h1>

      <!-- <div v-for="action in filterBy(action_by_address_users, true, 'is_violation')"> -->
      <div v-for="action in filtered_violations_is_true">
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
      filtered_violations_is_true: [],
      errors: []
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/filtered_violations_is_true').then(function(response) {
      console.log(response.data);
      this.filtered_violations_is_true = response.data;
    }.bind(this))
  },
  methods: {},
  computed: {}
};
</script>
