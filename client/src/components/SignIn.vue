<template>
  <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input v-model="user.name" type="text" class="form-control" placeholder="Name">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input v-model="user.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <a class="btn btn-primary text-white" @click="signIn()">Sign In </a>
</form>
</template>


<script>
    
    import mutation from '../mutations/SignIn.js'

    export default {
        data() {
            return {
              user : { name: '', password: '', token:'' }
            }
        },
        methods: {
            signIn() {
                self = this
                this.$apollo.mutate({
                    mutation, 
                    variables: {
                     name: self.user.name, 
                     password: self.user.password,
                    },
                     }).then((data) => {
                     self.user.token =  data.data.login.token
                     self.user.role =  data.data.login.role
                     console.log(self.user)
                     this.$store.commit('changeUser', self.user)
                     this.$router.push('/')
                    }).catch((error) => {
                    console.error(error)
                })
            }
        }
    }
</script>