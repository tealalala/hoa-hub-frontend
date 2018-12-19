<template>
  <div class="bylawsIndex">
    <div class="container">
      <h1>Bylaws</h1>
      <h5>Townsend Maple Homeowners Association</h5>

      <!-- <div v-for="bylaw in filtered_bylaws_is_true">
        <p>section: {{ bylaw.section }}</p>
        <p>description: {{ bylaw.door }}</p>
        <p>status: {{ bylaw.status }}</p>
        <p>date_approved: {{ bylaw.date_approved }}</p>
        <p>association_management_id: {{ bylaw.association_management_id }}</p>
        <hr>
      </div> -->

      <table width="100%" border=1 cellpadding=10 cellspacing=10>
        <thead bgcolor=#eee>
          <!-- <th width="5%" scope="col" style="text-align: left; width: 10rem;">
            ID
          </th> -->
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
          <tr v-for="action in filtered_bylaws_is_true">
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
