import Vue  from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        user: {name: '', role:'', nBets: 0, wBets: 0, token: ''}
    }, 
    getters: {
        getUser: state => {
            return state.user; 
        },
    },

    mutations: {
        changeUser: (state, user) => {
            state.user.name = user.name
            state.user.token = user.token
            state.user.role = user.role 
        }, 
        wonBet:(state) => {
            state.user.nBets++
            state.user.wBets++
        },
        lostBet:(state) => {
            state.user.nBets++
        },
        destroySession: (state) => {
            state.user.name = ''
            state.user.role = ''
            state.user.nBets = 0
            state.user.wBets = 0
            state.user.token = ''
        }
    }
})