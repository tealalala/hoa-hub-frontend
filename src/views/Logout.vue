<template>
  <div class="logout">
    <div class="container">
      <h1>You logged out successfully</h1>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created: function() {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    this.$router.push("/LogOut");
    console.log("user logged out");
  }
};
</script>
