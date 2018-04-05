import SignUp from './components/SignUp.vue'
import SignIn from './components/SignIn.vue'
import Home   from './components/Home.vue'
import LogOut from './components/LogOut.vue'
import Bets   from './components/Bets.vue'
import { store }         from './store/store'

export const routes = [
    { path: '/home', component: Home },
    {   path: '/Signup', 
        component: SignUp,
        beforeEnter: (to, from, next) => {
            if (store.getters.getUser.role >= 30)  {
                next(); 
            } else {
                next({path: '/login'})
            }
        }
    },
    { path: '/login', component: SignIn },
    { path: '/logout', component: LogOut },
    {   path: '/bets', 
        component: Bets,
        beforeEnter: (to, from, next) => {
            if (store.getters.getUser.role >= 20)  {
                next(); 
            } else {
                next({path: '/login'})
            }
        } }
];