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
    <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-2 pt-0">Roles</legend>
      <div class="col-sm-10">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="20" v-model="user.role">
          <label class="form-check-label" for="gridRadios1">
            Admin
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="10"  v-model="user.role">
          <label class="form-check-label" for="gridRadios2">
            User
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="0"  v-model="user.role">
          <label class="form-check-label" for="gridRadios3">
            Guest
          </label>
        </div>
      </div>
    </div>
  </fieldset>
  <a class="btn btn-primary text-white" @click="signUp()">Sign Up </a>
</form>
</template>


<script>
    
    import mutation from '../mutations/SignUp.js'
    export default {
           data() {
            return {
                user : { name: '', password: '', role:'' }
            }
        },
        methods: {
            signUp() {
                self = this
                this.$apollo.mutate({
                    mutation, 
                    variables: {
                     name: self.user.name, 
                     password: self.user.password,
                     role: self.user.role
                    },
                     }).then((data) => {
                    this.$store.commit('changeUser', self.user)
                    this.$router.push('/')
                    }).catch((error) => {
                    console.error(error)
                })
            }
        }
    }
</script>