<template>
  <div class="votesIndex">
    <div class="container">
      <h1>Vote on Proposed Bylaws & CCRS</h1>

      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <div class="card" style="width: 100%;">
              <div class="card-body">
                <h5 class="card-title">Bylaws</h5>
                <h6 class="card-subtitle mb-2 text-muted">The Association's Governing Rules</h6>
                <p class="card-text">
                  <ul class="list-inline">
                    <li>determines how the association is run</li>
                    <li>board of directors are elected members who follow the association's bylaws</li>
                    <li>governs how often meetings are held, conducted, board offices, membership voting rights</li>
                    <li>new bylaws may be proposed by the Board of Directors</li>
                  </ul>
                </p>
                <a href="/#/bylaws" class="card-link">View the Bylaws</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" style="width: 100%;">
              <div class="card-body">
                <h5 class="card-title">CC&Rs</h5>
                <h6 class="card-subtitle mb-2 text-muted">The Community's Standards</h6>
                <p class="card-text">
                  <ul class="list-inline">
                    <li>stands for Covenants, Conditions, and Restrictions</li>
                    <li>a legal document that lays out the guidelines for the planned community</li>
                    <li>are recorded in the county records and legally binding</li>
                    <li>govern what homeowners can, can't or must do with respect to your home</li>
                  </ul>
                </p>
                <a href="/#/ccrs" class="card-link">View the CC&Rs</a>
              </div>
            </div>
          </div>
        </div>
      </div>



      <table width="100%" border=1 cellpadding=10 cellspacing=10>
        <thead bgcolor=#eee>
          <th width="5%" scope="col" style="text-align: left; width: 10rem;">
            ID
          </th>
          <th width="5%" scope="col" style="text-align: left; width: 10rem;">
            Status
          </th>
          <th width="5%" scope="col" style="text-align: left; width: 10rem;">
            Section
          </th>
          <th width="55%" scope="col" style="text-align: left; width: 10rem;">
            Description
          </th>
          <th width="10%" scope="col" style="text-align: left; width: 10rem;">
            Date Proposed
          </th>
          <th width="10%" scope="col" style="text-align: left; width: 10rem;">
            Vote in favor
          </th>
          <th width="10%" scope="col" style="text-align: left; width: 10rem;">
            Vote against
          </th>
        </thead>
        <tbody>
          <tr v-for="action in filtered_bylaws_is_false">
            <td>{{ action.id }}</td>
            <td>{{ action.status }}</td>
            <td>{{ action.section }}</td>
            <td>{{ action.description }}</td>
            <td>{{ action.date_proposed }}</td>
            <td><a href="#" class="btn btn-danger" v-on:click="voteUp(action)">Vote in Favor</a></td>
            <td><a href="#" class="btn btn-danger" v-on:click="voteDown(action)">Vote Against</a></td>
          </tr>
        </tbody>
      </table>

      <p></p>

      <!-- <span class="button-space"><button class="btn btn-primary" v-on:click="fetchUser()">Fetch User</button></span> -->

    </div>
  </div>
</template>

<style>
.button-space {
  margin: 20px;
}
</style>

<script>
import axios from 'axios'

export default {
  data: function() {
    return {
      user: [],
      filtered_bylaws_is_false: [],
      errors: []
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/filtered_bylaws_is_false').then(function(response) {
      this.filtered_bylaws_is_false = response.data;
    }.bind(this))
  },
  methods: {
    // fetchUser: function() {
    //   axios.get('http://localhost:3000/api/users')
    //     .then(response => {
    //       this.user = response.data;
    //       console.log('user was fetched');
    //     })
    //     .catch(error => {
    //       alert('Something went wrong');
    //       console.error(error.response.data);
    //     });
    // },
    voteUp: function(inputAction) {
      console.log(inputAction);
      var params = {
        category: inputAction.section,
        description: inputAction.description,
        status: true,
        date_open: inputAction.date_proposed,
        is_architecture: false,
        is_violation: false,
        is_vote: true,
        // user_id: inputAction.current_user.id,
        // property_address_id: inputAction.current_user.property_address_id,
        bylaw_id: inputAction.id,
        ccr_id: null,
      };
      axios
        .post("http://localhost:3000/api/action_by_address_users/", params)
        .then(response => {
          console.log('voteUp function clicked');
          // console.log(params);
          // console.log(response.data);
          // this.action_by_address_user.push(response.data);
          // console.log('adding the action');
          // console.log(inputAction);
          var index = this.filtered_bylaws_is_false.indexOf(inputAction);
          this.filtered_bylaws_is_false.splice(index, 1);
          this.errors = [];
        })
        .catch(error => {
          console.log('catch function');
          console.log(error);
          console.log(error.response);
          // this.errors s= error.response.data.errors;
        })
        window.location.reload();
        console.log("voteUp completed");
    },
    voteDown: function(inputAction) {
      console.log(inputAction);
      var params = {
        category: inputAction.section,
        description: inputAction.description,
        status: false,
        date_open: inputAction.date_proposed,
        is_architecture: false,
        is_violation: false,
        is_vote: true,
        // user_id: current_user.id,
        // property_address_id: current_user.property_address_id,
        bylaw_id: inputAction.id,
        ccr_id: null,
      };
      axios
        .post("http://localhost:3000/api/action_by_address_users/", params)
        .then(response => {
          console.log('voteDown function clicked');
          console.log(params);
          console.log(response.data);
          var index = this.filtered_bylaws_is_false.indexOf(inputAction);
          this.filtered_bylaws_is_false.splice(index, 1);
          this.errors = [];
        })
        .catch(error => {
          console.log('catch function');
          console.log(errors.response);
          this.errors = errors.response.data.errors;
        });
        window.location.reload();
        console.log("voteDown completed");
    },
  }
}
</script>
