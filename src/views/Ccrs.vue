<template>
  <div class="ccrsIndex">
    <div class="container">
      <h1>CCRS Index</h1>

      <div v-for="ccr in filtered_ccrs_is_true">
        <p>section: {{ ccr.section }}</p>
        <p>description: {{ ccr.door }}</p>
        <p>status: {{ ccr.status }}</p>
        <p>date_approved: {{ ccr.date_approved }}</p>
        <p>association_management_id: {{ ccr.association_management_id }}</p>
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
      filtered_ccrs_is_true: {},
      errors: []
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/filtered_ccrs_is_true').then(function(response) {
      console.log(response.data);
      this.filtered_ccrs_is_true = response.data;
    }.bind(this))
  },
  methods: {},
  computed: {}
};
</script>
