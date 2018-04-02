import Vue  from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        name: ''
    }, 
    getters: {
        getUser: state => {
            return state.name
        }
    },

    mutations: {
        changeUser: (state, name) => {
            state.name = name
        }
    }
})