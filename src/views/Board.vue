<template>
  <div class="board">
      <div class="container">

        <h1>Meet Your Board of Directors</h1>
        <h5>Townsend Maple Homeowners Association</h5>

        <div class="div-spacer">
        </div>

        <!-- <div class="row">
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
        </div> -->

        <!-- <div class="row">
          <div class="col-sm-4" v-for="boardPerson in filtered_board_is_true">
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">{{ boardPerson.user_id }}</h5>
                <p class="card-text">
                  <p>{{ boardPerson.role_id }}</p>
                  <p>{{ boardPerson.group_id }}</p>
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div> -->

        <div class="row">
          <div class="col-sm-4">
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="../assets/images/elsie.jpg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Elsie Chara</h5>
                <p class="card-text">President</p>
                <a href="#" class="btn btn-primary">Contact</a>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="../assets/images/shelli-klein.jpg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Shelli Klein</h5>
                <p class="card-text">Vice President</p>
                <a href="#" class="btn btn-primary">Contact</a>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="../assets/images/tilda-boyer.jpg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Tilda Boyer</h5>
                <p class="card-text">Treasurer</p>
                <a href="#" class="btn btn-primary">Contact</a>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="../assets/images/angel-ritchie.jpg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Angel Ritchie</h5>
                <p class="card-text">Director</p>
                <a href="#" class="btn btn-primary">Contact</a>
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

.card-spacer {
  margin-bottom: 50%;
}
</style>

<script>
import axios from 'axios'

export default {
  data: function() {
    return {
      filtered_board_is_true: [],
      errors: []
    };
  },
  created: function() {
    // axios.get('http://localhost:3000/api/filtered_board_is_true').then(function(response) {
    //   console.log(response.data);
    //   this.filtered_board_is_true = response.data;
    // }.bind(this))
  },
  methods: {},
  computed: {}
};
</script>
