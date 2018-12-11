<template>
  <div class="home">

    <div class="jumbotron bg">
      <h1 class="display-4">Engage with your association today!</h1>
      <p class="lead">We will connect you with important matters related to your association.</p>
      <!-- <hr class="my-4 hr-style" align="left"> -->
      <!-- <p>Take a moment to sign up today.</p> -->
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="/#/signup" role="button">Sign up</a>
      </p>
    </div>

    <div class="cards-container">
      <!-- All the cards -->
      <div class="row">
        <div class="col-sm">

          <!-- First Card -->
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="#" alt="Card image cap">
            <div class="card-body">
              <p class="card-text">Connect with your association</p>
            </div>
          </div>

        </div>
        <div class="col-sm">

          <!-- Second Card -->
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="#" alt="Card image cap">
            <div class="card-body">
              <p class="card-text">Make your vote count, every time</p>
            </div>
          </div>

        </div>
        <div class="col-sm">
          <!-- Third Card -->
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="#" alt="Card image cap">
            <div class="card-body">
              <p class="card-text">Maintain the neighborhood standard</p>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Footer -->
    <div class="footer">
      this is the footer
    </div>

  </div>
</template>

<style>
.cards-container {
  margin: auto;
  width: 100%;
  background-color: red;
}


.bg {
  background: url('../assets/images/house.jpg') no-repeat center center;
  width: 100%;
  height: 100vh;
  background-size: 70%;
  background-position: right;
}

.jumbotron {
  background-color: #f8f5e6;
  padding-top: 100px;
  margin-bottom: 80px;
}

.navbar {
  margin-bottom: 0px;
}

.hr-style {
   width: 50%;
}

.card {
  margin-bottom: 5%;
}

.footer {
  margin: auto;
  margin-top: 10%;
  padding: 3%;
  background-color: #11a1a1;
  width: 100%;
  color: white;
}

</style>

<script>
export default {
  data: function() {
    return {};
  },
  created: function() {},
  methods: {},
  computed: {}
};
</script>
