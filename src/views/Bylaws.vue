<template>
  <div class="bylawsIndex">
    <div class="container">
      <h1>Bylaws Index</h1>

      <div v-for="bylaw in filtered_bylaws_is_true">
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

export default {
  data: function() {
    return {
      filtered_bylaws_is_true: {},
      errors: []
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/filtered_bylaws_is_true').then(function(response) {
      console.log(response.data);
      this.filtered_bylaws_is_true = response.data;
    }.bind(this))
  },
  methods: {},
  computed: {}
};
</script>
