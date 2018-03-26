<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary">
  <a class="navbar-brand text-white" href="#">All in</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
         <router-link to="/home"> <a class="nav-link text-white">Home</a> </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/login"> <a class="nav-link  text-white">Login</a ></router-link>
      </li>
      <li>
           <router-link to="/Signup"> <button class="btn btn-outline-light my-2 my-sm-0">Sign Up</button></router-link>
      </li>
    </ul>
  </div>
</nav>
</template>
<script>
    export default {
      
    }
</script>