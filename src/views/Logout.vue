<template>
  <div class="logout">

  </div>
</template>

<script>
import axios from "axios";

export default {
  created: function() {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    this.$router.push("/Home");
    console.log("user logged out");
  }
};
</script>
