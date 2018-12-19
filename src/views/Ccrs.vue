<template>
  <div class="ccrsIndex">
    <div class="container">
      <h1>Covenants, Conditions, and Restrictions (CC&Rs)</h1>
      <h5>Townsend Maple Homeowners Association</h5>

      <!-- <div v-for="ccr in filtered_ccrs_is_true">
        <p>section: {{ ccr.section }}</p>
        <p>description: {{ ccr.door }}</p>
        <p>status: {{ ccr.status }}</p>
        <p>date_approved: {{ ccr.date_approved }}</p>
        <p>association_management_id: {{ ccr.association_management_id }}</p>
        <hr>
      </div> -->

      <p>THIS DECLARATION OF COVENANTS, CONDITIONS AND RESTRICTIONS OF TOWNSEND MAPLE ("Declaration") is made by TOWNSEND HOMES, INC., a California corporation, ("Declarant").</p>

      <table width="100%" border=1 cellpadding=10 cellspacing=10>
        <thead bgcolor=#eee>
          <th width="5%" scope="col" style="text-align: left; width: 10rem;">
            Article <br/>& Section
          </th>
          <th width="5%" scope="col" style="text-align: left; width: 10rem;">
            Header
          </th>
          <th width="80%" scope="col" style="text-align: left; width: 10rem;">
            Description
          </th>
          <th width="10%" scope="col" style="text-align: left; width: 10rem;">
            Date Approved
          </th>
        </thead>
        <tbody>
          <tr v-for="action in filtered_ccrs_is_true">
            <!-- <td>{{ action.id }}</td> -->
            <td>{{ action.article }}.{{ action.section }}</td>
            <td>{{ action.header }}</td>
            <td>{{ action.description }}</td>
            <td>{{ action.date_approved }}</td>
          </tr>
        </tbody>
      </table>

      <p></p>

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
