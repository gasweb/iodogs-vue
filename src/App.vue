<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
    <div class="container-fluid">
      <router-link to="/">
        <img src="/favicon.ico" alt="Iodogs heart" />
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <AppNavigation></AppNavigation>
    </div>
  </nav>
  <router-view />
</template>
<script>
import AppNavigation from '@/views/navigation'
export default {
  components: { AppNavigation },
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
