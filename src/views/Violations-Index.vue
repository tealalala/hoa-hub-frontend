<template>
  <div class="violationsIndex">
    <div class="container-fluid">
      <h1>Violations</h1>

      <!-- <div v-for="action in filterBy(action_by_address_users, true, 'is_violation')"> -->
      <!-- <div v-for="action in filtered_violations_is_true">
        <p>violation category: {{ action.category }} test</p>
        <p>status: {{ action.status }} test</p>
        <hr>
      </div> -->

      <table width="100%" border=1 cellpadding=10 cellspacing=10>
        <tr bgcolor=#eee>
          <th width="30%">Violation Category</th>
          <th width="50%">Description</th>
          <th width="10%">Action</th>
        </tr>
        <tr v-for="action in filtered_violations_is_true">
          <td>{{ action.category }}</td>
          <td>{{ action.description }}</td>
          <td><a href="#" class="btn btn-danger" v-on:click="">Resolve this Violation</a></td>
        </tr>
      </table>


      <!-- <div class="w-auto p-3" v-for="action in filtered_violations_is_true">
        <div class="card-body">
          <h5 class="card-title">{{ action.category }} Violation</h5>
          <p class="card-text">Description: {{ action.description }}</p>
          <a href="#" class="btn btn-danger">Resolve this Violation</a>
          <hr>
        </div>
      </div> -->

    </div>
  </div>
</template>

<style>
table {
  margin-top: 30px;
}
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
