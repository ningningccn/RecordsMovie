<template>
  <div class="offcanvas offcanvas-start" id="navbarNavAltMarkup">
    <div class="navbar-nav h-100">
      <button
        type="button"
        class="btn-close btn-close-white ms-auto me-3 my-2"
        data-bs-dismiss="offcanvas"
        aria-label="Close"></button>
      <div v-for="(item, key) in header" :key="item.id">
        <router-link class="offcanvas_link" :to="`/${key}`">{{ item }} </router-link>
      </div>
      <router-link class="offcanvas_link mt-auto" to="" @click.prevent="logout()">登出</router-link>
    </div>
  </div>
</template>

<script>
import { headerData } from "@/api/header";
console.log(headerData);
export default {
  computed: {
    header() {
      return headerData;
    },
  },
};
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
