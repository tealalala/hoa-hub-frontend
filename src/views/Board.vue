<template>
  <div class="board">
      <div class="container">

        <h1>Meet Your Board of Directors</h1>

        <div class="div-spacer">

        </div>
        <div class="row">
          <div class="col-sm-4">
            <div class="card" style="width: 18rem;" v-for="boardPerson in filtered_board_is_true">
              <img class="card-img-top" src="" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">{{ boardPerson.user_id }}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>

      </div>
  </div>
</template>

<style>
.div-spacer {
  margin: 5%;
}
</style>

<script>
import axios from 'axios'
import Vue2Filters from 'vue2-filters'

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      filtered_board_is_true: [],
      errors: []
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/filtered_board_is_true').then(function(response) {
      console.log(response.data);
      this.filtered_board_is_true = response.data;
    }.bind(this))
  },
  methods: {},
  computed: {}
};
</script>
