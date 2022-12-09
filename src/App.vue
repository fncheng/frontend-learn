<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/iframe">Iframe</router-link> |
      <router-link to="/third">Third</router-link> |
      <router-link to="/tailwindcss">tailwindcss</router-link> |
      <router-link to="/some">some</router-link>
    </div>
    <!-- <i-frame v-if="$route.meta.iframe" :src="$route.meta.url" /> -->
    <router-view v-if="$route.path === '/about'"></router-view>
    <keep-alive v-else :include="['About', 'Home', 'Index', 'index']">
      <router-view></router-view>
    </keep-alive>
    <!-- <iframe
      v-if="$route.meta.iframe"
      src="http://192.168.0.183:8080/hiip-portal/a/sso/showSysIndex"
      frameborder="0"
      width="100%"
      height="100%"
    ></iframe> -->
  </div>
</template>

<script>
// import iFrame from './views/iFrame.vue'
export default {
  name: 'App',
  // components: { iFrame },
  created() {
    console.log('this in App', this.$router.options.routes)
    if (this.name === 1) {
      console.log(1)
    } else if (this.name === 2) {
      /*******
       * 12312
       */
      console.log(2)
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
