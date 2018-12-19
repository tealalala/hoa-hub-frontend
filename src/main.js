import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from "axios";
import SortedTablePlugin from "vue-sorted-table";


// Login JWT
var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

Vue.config.productionTip = false

// Vuejs App Render
new Vue({
  router,
  render: h => h(App),
  watch: {
    '$route': function() {
      window.location.reload();
    }
  }
}).$mount('#app')

// Vue-sortable-table plug-in
Vue.use(SortedTablePlugin);

// Smooth Scroll
jQuery(document).ready(function( $ ) {

  // Smooth scroll for the menu and links with .scrollto classes
  $('.smoothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 48
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });
});
