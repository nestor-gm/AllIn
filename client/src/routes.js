import SignUp from './components/SignUp.vue'
import SignIn from './components/SignIn.vue'
import Home   from './components/Home.vue'
import LogOut from './components/LogOut.vue'
import Bets   from './components/Bets.vue'

export const routes = [
    { path: '/home', component: Home },
    { path: '/Signup', component: SignUp  },
    { path: '/login', component: SignIn },
    { path: '/logout', component: LogOut },
    { path: '/bets', component: Bets }
];