<template>
  <div class="offcanvas offcanvas-start" id="navbarNavAltMarkup">
    <div class="navbar-nav h-100">
      <button
        type="button"
        class="btn-close btn-close-white ms-auto me-3 my-2"
        data-bs-dismiss="offcanvas"
        aria-label="Close"></button>
      <router-link class="offcanvas_link" to="/movie">電影</router-link>
      <router-link class="offcanvas_link" to="/tvDrama">電視劇</router-link>
      <router-link class="offcanvas_link" to="/tvShow">綜藝</router-link>
      <router-link class="offcanvas_link" to="/cartoon">動漫</router-link>
      <router-link class="offcanvas_link mt-auto" to="" @click.prevent="logout()">登出</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.offcanvas {
  background-color: #032541;
}
.offcanvas_link {
  font-size: 24px;
  display: block;
  padding: 0.5rem 1rem;
  color: #ffffff;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
}
</style>
