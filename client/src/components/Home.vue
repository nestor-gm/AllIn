<template>
    <div>
    <h1> Hola Home </h1>
    <a class="btn btn-primary text-white" @click="getAllUsers()">Users </a>
    <div v-if="users.length > 0">
        <ul>
            <li v-for="name in users">
                    <a @click="deleteUser(name)">{{ name }}</a>
            </li>
        </ul>
    </div>
    </div>
</template>

<script>

      import query  from '../queries/getAllUsers.js'
      import mutation from '../mutations/deleteUser.js'

       export default {
        data() {
            return {
              prueba: '',
              users: []
            }
        },
        apollo: {
                prueba: {
                    query: query,
                    update(data) {
                    return data.getAllUsers
                }
            }
        },
         methods: {
            getAllUsers() {
               this.$apollo.queries.prueba.refetch()
               this.users = []
               for(var i = 0; i < this.prueba.length; i++) {
                   this.users.push(this.prueba[i].name)
               }
            },
            deleteUser(name) {
                self = this 
                this.$apollo.mutate({
                    mutation, 
                    variables: {
                     name: name 
                    },
                     }).then((data) => {
                        self.getAllUsers()
                    }).catch((error) => {
                    console.error(error)
                })
            }
        }
    }

</script>