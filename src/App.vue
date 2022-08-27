<template>
  <div id="app">
    <AppHeader />
    <router-view />
  </div>
</template>

<script>
import AppHeader from "@/components/global/AppHeader.vue";

export default {
  name: "app",
  components: {
    AppHeader,
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Noto Kufi Arabic", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a {
  a {
    text-decoration: none;
    color: white;
  }
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
