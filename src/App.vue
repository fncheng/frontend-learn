<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/iframe">Iframe</router-link> |
      <router-link to="/third">Third</router-link> |
      <router-link to="/tailwindcss">tailwindcss</router-link> |
      <router-link to="/some">some</router-link> |
      <el-button size="mini" @click="logout">登出</el-button>
    </div>
    <!-- <i-frame v-if="$route.meta.iframe" :src="$route.meta.url" /> -->
    <keep-alive>
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
import store from './store'
// import iFrame from './views/iFrame.vue'
export default {
  name: 'App',
  // components: { iFrame },
  created() {
    if (this.name === 1) {
      console.log(1)
    } else if (this.name === 2) {
      /*******
       * 12312
       */
      console.log(2)
    }
  },
  methods: {
    logout() {
      store.commit('SET_LOGIN', false)
      this.$router.push('/login')
    },
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
