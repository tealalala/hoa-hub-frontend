<template>
  <div class="home">

    <div class="jumbotron bg">
      <h1 class="display-4">Engage with your association today!</h1>
      <p class="lead">We will connect you with important matters related to your association.</p>
      <!-- <hr class="my-4 hr-style" align="left"> -->
      <!-- <p>Take a moment to sign up today.</p> -->
      <p class="lead">
        <!-- <a class="btn btn-primary btn-lg" href="/#/signup" role="button">Sign up</a> -->
        <form class="form-inline" role="form">
          <div class="form-group">
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter your email address" size="40%">
          </div>
          <button type="submit" class="btn btn-warning btn-lg">Connect me!</button>
        </form>
      </p>
    </div>

    <div class="container">
      <div class="row mt centered">
        <div class="col-lg-4">
          <img src="../assets/images/ser01.png" width="180" alt="">
          <h4>1 - Browser Compatibility</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
        </div>
        <!--/col-lg-4 -->

        <div class="col-lg-4">
          <img src="../assets/images/ser02.png" width="180" alt="">
          <h4>2 - Email Campaigns</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>

        </div>
        <!--/col-lg-4 -->

        <div class="col-lg-4">
          <img src="../assets/images/ser03.png" width="180" alt="">
          <h4>3 - Gather Your Notes</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>

        </div>
        <!--/col-lg-4 -->
      </div>
      <!-- /row -->
    </div>
    <!-- /container -->


    <!-- Footer -->
    <div class="footer">
      <h5>HOAHub</h5>
      <p class="footer-text">Careers</p>
      <p class="footer-text">Press</p>
      <p class="footer-text">Policies</p>
      <p class="footer-text">Help</p>
    </div>

  </div>
</template>

<style>
#exampleInputEmail1 {
  width: 100%;
  margin-right: 20px;
}

.cards-container {
  margin: auto;
  width: 100%;
  background-color: red;
}


.bg {
  background: url('../assets/images/house.jpg') no-repeat center center;
  width: 100%;
  height: 90vh;
  background-size: 60%;
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
