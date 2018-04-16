# All in

Tecnologías aprendidas hasta el momento

## Front End

* JavaScript framework [Vue](https://github.com/vuejs/vue)
* Centralized State Management for Vue [Vuex](https://github.com/vuejs/vuex)
* Routing Vue [Vue-Router](https://github.com/vuejs/vue-router)
* HTTP Client for Vue [Vue-Resource](https://github.com/pagekit/vue-resource)
* GraphQL integration for VueJS [Vue-Apollo](https://github.com/Akryum/vue-apollo)


## Back End

* Query Language [GraphQL](https://github.com/facebook/graphql)
* Json Web Token ( Standard Security ) [JWT](https://github.com/auth0/node-jsonwebtoken)
* Containerization platform [Docker](https://www.docker.com/)


##### Montar Contenedor Front-End


```
cd client && docker build -t client . 
```


##### Montar Contenedor Back End

```
cd server && docker-compose build 
```


##### Montar aplicacion 

```
docker-compose build 
```

##### Acceder aplicacion

```
docker-compose up -d 
```

##### Cerrar la aplicacion

```
docker-compose down 
```


