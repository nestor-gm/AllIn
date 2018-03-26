<template>
  <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input v-model="name" type="text" class="form-control" placeholder="Name">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <a class="btn btn-primary text-white" @click="signUp()">Sign Up </a>
</form>
</template>


<script>
    
    import gql from 'graphql-tag'

    export default {
        data() {
            return {
                name: '',
                password: ''
            }
        },
        methods: {
            signUp() {
                self = this
                this.$apollo.mutate({
                    mutation: gql`mutation($name: String, $password: String) {
                        signup(name: $name, password: $password) {
                        id
                        name
                        }
                    }`, 
                    variables: {
                     name: self.name, 
                     password: self.password,
                    },
                     }).then((data) => {
                    console.log(data)
                    }).catch((error) => {
                    console.error(error)
                })
            }
        }
    }
</script>