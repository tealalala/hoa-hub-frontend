<template>
  <div class="bylawsIndex">
    <div class="container">
      <h1>Bylaws Index</h1>

      <div v-for="bylaw in filterBy(bylaws, true, 'status')">
        <p>section: {{ bylaw.section }}</p>
        <p>description: {{ bylaw.door }}</p>
        <p>status: {{ bylaw.status }}</p>
        <p>date_approved: {{ bylaw.date_approved }}</p>
        <p>association_management_id: {{ bylaw.association_management_id }}</p>
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
      bylaws: {},
      errors: []
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/bylaws').then(function(response) {
      console.log(response.data);
      this.bylaws = response.data;
    }.bind(this))
  },
  methods: {},
  computed: {}
};
</script>
