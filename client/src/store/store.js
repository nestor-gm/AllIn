import Vue  from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        role: ''
    }, 
    getters: {
        getUser: state => {
            return state.role
        }
    },

    mutations: {
        changeUser: (state, role) => {
            state.role = role
        }
    }
})