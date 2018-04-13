import Vue                           from 'vue'
import App                           from './App.vue'
import VueRouter                     from 'vue-router'
import { routes }                    from './routes'
import { ApolloClient }              from 'apollo-client'
import { HttpLink }                  from 'apollo-link-http'
import { InMemoryCache }             from 'apollo-cache-inmemory'
import VueApollo                     from 'vue-apollo'
import { store }                     from './store/store'
import { ApolloLink, concat, split } from 'apollo-link';


Vue.use(VueRouter)


const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: store.getters.getUser.token ||  null,
    }
  });
  return forward(operation);
})



const httpLink = new HttpLink({
    uri: 'http://localhost:4000/graphql',
  })
  
const apolloClient = new ApolloClient({
    link: concat(authMiddleware, httpLink),
    cache: new InMemoryCache(),
    connectToDevTools: true,
})


const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
})

new Vue({
  el: '#app',
  router,
  store,
  provide: apolloProvider.provide(),
  render: h => h(App)
})