import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";

// Association
import Board from "./views/Board.vue";
import AssociationManagement from "./views/AssociationManagement.vue";

// All Users
import Calendar from "./views/Calendar.vue";

// Account - General
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";

// Association for All Users
import CommunityMap from "./views/CommunityMap.vue";

// Homeowner Users
import ArchitectureIndex from "./views/Architecture-Index.vue";
import ArchitectureNew from "./views/Architecture-New.vue";
import BylawsIndex from "./views/Bylaws.vue";
import CCRSIndex from "./views/Ccrs.vue";
import HomePaint from "./views/HomePaint.vue";
import SellingYourHome from "./views/SellingYourHome.vue";
import UserProfile from "./views/Profile.vue";
import ViolationsIndex from "./views/Violations-Index.vue";
import VotesIndex from "./views/Votes-Index.vue";


Vue.use(Router)

export default new Router({
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/about", name: "about", component: About },
    { path: "/board", name: "board", component: Board },
    { path: "/management", name: "associationManagement", component: AssociationManagement },
    { path: "/calendar", name: "calendar", component: Calendar },
    { path: "/signup", name: "signup", component: Signup },
    { path: "/login", name: "login", component: Login },
    { path: "/logout", name: "logout", component: Logout },
    { path: "/community-map", name: "communityMap", component: CommunityMap },
    { path: "/architecture-index", name: "architectureIndex", component: ArchitectureIndex},
    { path: "/architecture-new", name: "architectureNew", component: ArchitectureNew },
    { path: "/bylaws", name: "bylawsIndex", component: BylawsIndex },
    { path: "/ccrs", name: "ccrsIndex", component: CCRSIndex },
    { path: "/home-paint", name: "homePaint", component: HomePaint },
    { path: "/selling-your-home", name: "sellingYourHome", component: SellingYourHome },
    { path: "/profile", name: "userProfile", component: UserProfile },
    { path: "/violations-index", name: "violationsIndex", component: ViolationsIndex },
    { path: "/votes-index", name: "votesIndex", component: VotesIndex },
  ]
})
