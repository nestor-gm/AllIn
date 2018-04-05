import Vue  from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        user: {name: '', role:''}
    }, 
    getters: {
        getUser: state => {
            return state.user; 
        }
    },

    mutations: {
        changeUser: (state, user) => {
            state.user.name = user.name
            state.user.role = user.role 
        }
    }
})