<template>
    <router-view  v-if="isRouterAlive"/>
</template>

<script>

export default {
  name: "Home",
  components: {
    // Header,
  },
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      isRouterAlive: true,
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true;
      });
    },
  },
  mounted() {
    this.$store.dispatch("getDBState");
  }
};
</script>

<style lang="scss">
@import "./assets/scss/main.scss";

#app {
  font-family: roboto,"Microsoft jhenghei",Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-bottom: 200px;
  /* position: relative;
  min-height: 100%; */
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #c0fecf;
}

</style>
