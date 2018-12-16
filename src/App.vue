<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-default fixed-top">
        <a class="navbar-brand" href="/#/">HOAHub</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Association
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="/#/board">Meet Your Board of Directors</a>
                <a class="dropdown-item" href="/#/management">Meet Your Association Management Team</a>
                <a class="dropdown-item" href="#">Budget</a>
                <a class="dropdown-item" href="/#/bylaws">Bylaws</a>
                <a class="dropdown-item" href="#">Community Map</a>
                <a class="dropdown-item" href="/#/ccrs">Covenants, Conditions, and Restrictions (CCRs)</a>
                <a class="dropdown-item" href="#">Insurance</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#/calendar">Calendar</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Manage Your Home
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="/#/architecture-index">Architecture Change Request</a>
                <a class="dropdown-item" href="/#/home-paint">Home Painting Restrictions</a>
                <a class="dropdown-item" href="#">Selling Your Home</a>
                <a class="dropdown-item" href="#">Solar Panel Restrictions</a>
                <a class="dropdown-item" href="/#/violations-index">Violations</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Make a payment</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Messages
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <!-- <a class="dropdown-item" href="/#/vote-bylaws">Vote on Proposed Bylaws</a>
                <a class="dropdown-item" href="/#/vote-ccrs">Vote on Proposed CCRS</a>
                <div class="dropdown-divider"></div> -->
                <a class="dropdown-item" href="/#/votes-index">Vote on Proposed Bylaws & CCRS</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Make a payment</a>
              </div>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" href="/#/messages">Messages</a> -->
              <!-- <img src="../src/assets/images/envelope.svg" width=20%> -->
            <!-- </li> -->
            <li class="nav-item dropdown">
              <!-- <a class="nav-link" href="/#/accountinfo">Account Info</a> -->
              <!-- <img src="../src/assets/images/user-2.svg" width=20%> -->
              <!-- <a class="nav-link" href="/#/accountinfo">Account (i)</a> -->
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Account
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="/#/profile">Profile</a>
                <a class="dropdown-item" href="#">Settings</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/#/logout">Log Out</a>
              </div>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" href="/#/signup">Signup</a>
            </li> -->
            <!-- <li class="nav-item">
              <a class="nav-link" href="/#/login">Login</a>
            </li> -->
          </ul>
          <!-- <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> -->
        </div>
      </nav>
    </div>
    <!-- /div nav -->

    <router-view/>
  </div>
</template>

<style>
body {
  padding-top: 50px;
}
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
