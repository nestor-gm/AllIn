<template>
    <div>
    <h1> Hola Home </h1>
    <a class="btn btn-primary text-white" @click="getAllUsers()">Users </a>
    </div>
</template>

<script>

      import query from '../queries/getAllUsers.js'

       export default {
        data() {
            return {
              prueba: ''
            }
        },
        apollo: {
            
            prueba: query,
        },
         methods: {
            getAllUsers() {
               console.log(this.prueba)
            }
        }
    }

</script>