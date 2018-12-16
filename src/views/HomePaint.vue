<template>
  <div class="homePaint">
    <div class="container">
      <h1>Home Paint Restrictions</h1>

      <div class="alert alert-secondary" role="alert">
        Please submit an <a href="/#/architecture-index">Architecture Change Request</a> online and await for the Board's approval prior to painting your home. Once approved, please base the paint off Pantone.
      </div>

      <div class="alert alert-warning" role="alert">
        You cannot paint your home outside of the association's home paint color scheme unless it is on this approved list.
      </div>

      <div class="row">
        <div class="col-sm-4">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="../assets/images/paint-model-a.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Model A - Orange</h5>
              <p class="card-text">Pantone 165C</p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="../assets/images/paint-model-b.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Model B - Yellow</h5>
              <p class="card-text">Pantone 116C</p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="../assets/images/paint-model-c.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Model C - Gray</h5>
              <p class="card-text">Pantone Color Cool Gray 1 C</p>
            </div>
          </div>
        </div>
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
