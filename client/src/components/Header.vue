<template>
  
  <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark border-bottom box-shadow">
      <h5 class="my-0 mr-md-auto font-weight-normal text-white">All in </h5>
      <router-link to="/home"> <a class="p-2 text-white">Home</a> </router-link>
      <div v-if="user.name.length == 0">
           <router-link to="/login"> <a class="p-2 text-white">Log in </a> </router-link>
      </div>
      <div v-else>
        <div class="btn-group">
          <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{ user.name }}
          </button>
        <div class="dropdown-menu">
          <router-link to="/logout"> <a class="dropdown-item">Exit </a></router-link>
          <router-link to="/bets"> <a class="dropdown-item">Bets </a></router-link>
          <div v-if="user.role==30">
          <router-link to="/Signup"> <a class="dropdown-item">Sign up </a></router-link>
          </div>
        </div>
        </div>
      </div>
  
  </div>




</template>
<script>
    export default {
      computed:  {
        user() {
          return this.$store.getters.getUser
        }
      }
    }
</script>