import SignUp from './components/SignUp.vue'
import SignIn from './components/SignIn.vue'
import Home from './components/Home.vue'

export const routes = [
    { path: '/home', component: Home },
    { path: '/Signup', component: SignUp },
    { path: '/login', component: SignIn }
];