<template>
  <div class="architectureIndex">
    <div class="container">
      <h1>Architectural Request</h1>


      <div class="alert alert-danger" role="alert">
        Board approval of your architecture request occurs when the Architecture Committee meets. It may take several months for approval. Please plan accordingly.
      </div>

      <button class="btn btn-primary create-request" v-on:click="createRequest()">Create a Request</button>

      <table width="100%" border=1 cellpadding=10 cellspacing=10>
        <thead bgcolor=#eee>
          <th width="30%" scope="col" style="text-align: left; width: 10rem;">
            Category
          </th>
          <th width="50%" scope="col" style="text-align: left; width: 10rem;">
            Description
          </th>
          <th width="10%" scope="col" style="text-align: left; width: 10rem;">
            Date Open
          </th>
          <th width="10%" scope="col" style="text-align: left; width: 10rem;">
            Status
          </th>
        </thead>
        <tbody>
          <tr v-for="action in filtered_architecture_is_true">
            <td>{{ action.category }}</td>
            <td>{{ action.description }}</td>
            <td>{{ action.date_open }}</td>
            <td>Waiting for Board Approval</td>
          </tr>
        </tbody>
      </table>
      <!-- /Table end -->

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
