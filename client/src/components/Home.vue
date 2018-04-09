<template>
    <div>
    <h1> Hola Home </h1>
    <a class="btn btn-primary text-white" @click="getAllUsers()">Users </a>
    </div>
</template>

<script>

      import query from '../queries/getAllUsers.js'
      import gql from 'graphql-tag'

       export default {
        data() {
            return {
              prueba: ''
            }
        },
        apollo: {
            prueba: {
                query: gql`{		
                            getAllUsers 
                    {
                        id
                        name
                    }
                    }`,
                update(data) {
                return data.getAllUsers
            }
        }
    },
         methods: {
            getAllUsers() {
               console.log(this.prueba)
            }
        }
    }

</script>