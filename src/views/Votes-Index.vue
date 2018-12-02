<template>
  <div class="votesIndex">
    <div class="container">
      <h1>Voting Index</h1>

      <p>test</p>

      <!-- <div v-for="action in filterBy(filtered_actions_vote_is_true, true, 'is_vote')"> -->
      <div v-for="action in filtered_actions_vote_is_true">
        <p>status: {{ action.status }}</p>
        <p>is_vote: {{ action.is_vote }}</p>
        <p>bylaw_id: {{ action.bylaw_id }}</p>
        <p>category: {{ action.category }}</p>
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
      filtered_actions_vote_is_true: {},
      errors: [],
      search_bylaw_id_exists: !null,
      search_status: false
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/filtered_actions_vote_is_true').then(function(response) {
      // console.log(response.data);
      this.filtered_actions_vote_is_true = response.data;
    }.bind(this))
  },
  methods: {}
};
</script>
