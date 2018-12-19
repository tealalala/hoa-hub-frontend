<template>
  <div class="violationsIndex">
    <div class="container">
      <h1>Violations</h1>

      <!-- <div v-for="action in filterBy(action_by_address_users, true, 'is_violation')"> -->
      <!-- <div v-for="action in filtered_violations_is_true">
        <p>violation category: {{ action.category }} test</p>
        <p>status: {{ action.status }} test</p>
        <hr>
      </div> -->

      <div class="alert alert-danger" role="alert">
        Violations occur when the homeowner does not adhere to the <a href="/#/ccrs">Covenants, Conditions, and Restrictions</a>. Please resolve violations as soon as you are able.
      </div>

      <!-- Table begin -->
      <table width="100%" border=1 cellpadding=10 cellspacing=10>
        <thead bgcolor=#eee>
          <th width="30%" scope="col" style="text-align: left; width: 10rem;">
            Violation Category
          </th>
          <th width="60%" scope="col" style="text-align: left; width: 10rem;">
            Description
          </th>
          <th width="10%" scope="col" style="text-align: left; width: 10rem;">
            Action Required
          </th>
        </thead>
        <tbody>
          <tr v-for="action in filtered_violations_is_true">
            <td>{{ action.category }}</td>
            <td>{{ action.description }}</td>
            <td><a href="#" class="btn btn-danger" data-toggle="modal" data-target="#resolveViolationModal" v-on:click="setCurrentViolation(inputViolation)">Resolve this Violation</a></td>
          </tr>
        </tbody>
      </table>
      <!-- /Table end -->

      <!-- Modal Window to Resolve Violations -->
      <div class="modal" tabindex="-1" role="dialog" id="resolveViolationModal">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Send message to the Board & Association</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>{{ currentViolation.category }}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>



    </div>
  </div>
</template>

<style>
table {
  margin-top: 30px;
}
</style>

<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      filtered_violations_is_true: [],
      errors: [],
      currentViolation: {
        category: "",
        description: ""
      }
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/filtered_violations_is_true').then(function(response) {
      console.log(response.data);
      this.filtered_violations_is_true = response.data;
    }.bind(this))
  },
  methods: {
    setCurrentViolation: function(inputViolation) {
      console.log(inputRecipe);
      this.currentViolation = inputViolation;
    }
  },
  computed: {}
};
</script>
