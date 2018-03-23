<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary">
  <a class="navbar-brand text-white" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link text-white" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link  text-white" href="#">Login</a>
      </li>
      <li>
           <router-link to="/Signup"> <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Sing Up</button></router-link>
      </li>
    </ul>
  </div>
</nav>
</template>
<script>
    export default {
      
    }
</script>