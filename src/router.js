import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";

// Association
import Board from "./views/Board.vue";

// All Users
import Calendar from "./views/Calendar.vue";

// Account - General
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";

// Homeowner Users
import ArchitectureIndex from "./views/Architecture-Index.vue";
import ArchitectureNew from "./views/Architecture-New.vue";
import BylawsIndex from "./views/Bylaws.vue";
import CCRSIndex from "./views/Ccrs.vue";
import UserProfile from "./views/Profile.vue";
import ViolationsIndex from "./views/Violations-Index.vue";
import VotesIndex from "./views/Votes-Index.vue";


Vue.use(Router)

export default new Router({
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/about", name: "about", component: About },
    { path: "/board", name: "board", component: Board },
    { path: "/calendar", name: "calendar", component: Calendar },
    { path: "/signup", name: "signup", component: Signup },
    { path: "/login", name: "login", component: Login },
    { path: "/logout", name: "logout", component: Logout },
    { path: "/architecture-index", name: "architectureIndex", component: ArchitectureIndex},
    { path: "/architecture-new", name: "architectureNew", component: ArchitectureNew },
    { path: "/bylaws", name: "bylawsIndex", component: BylawsIndex },
    { path: "/ccrs", name: "ccrsIndex", component: CCRSIndex },
    { path: "/profile", name: "userProfile", component: UserProfile },
    { path: "/violations-index", name: "violationsIndex", component: ViolationsIndex },
    { path: "/votes-index", name: "votesIndex", component: VotesIndex },
  ]
})
