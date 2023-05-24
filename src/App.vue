<template>
  <div id="app">
    <tags-list />
    <div class="nav">
      <span @click="urlTo('/')">Home</span> |
      <span @click="urlTo('/about')">About</span> |
      <span @click="urlTo('/exit')">Exit</span>
    </div>
    <div class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/exit">Exit</router-link> |
      <app-link to="/some">Some</app-link>
    </div>
    <div>
      <button @click="removeKeepAlive('About')">删除keep-alive缓存</button>
      <button @click="removeCache">remove About Cache</button>
    </div>
    <keep-alive :include="routerCacheList">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import AppLink from './components/AppLink.vue'
import TagsList from './components/TagsList.vue'
export default {
  name: 'App',
  components: {
    AppLink,
    TagsList,
  },
  data() {
    return {}
  },
  computed: {
    routerCacheList: {
      get() {
        return this.$store.state.routerCacheList
      },
      set(val) {
        console.log(val)
      },
    },
    routerCacheLessList() {
      return ['HelloWorld']
    },
  },
  created() {
    console.log('created', this.$store)
  },
  updated() {
    // this可以拿到keep-alive 子组件的vnode，this.$children 是个数组
    console.log('updated', this)
  },
  methods: {
    handleClick() {
      console.log(111)
    },
    urlTo(path) {
      // const keepAlive = this.$children
      this.$router.push(path)
    },
    removeKeepAlive(name) {
      const vnode = this.$children.find((item) => {
        const array = item.$vnode.tag.split('-')
        const tagName = array[array.length - 1] // 组件名
        return tagName === name
      })
      if (vnode) {
        console.log('vnode', vnode)
        vnode.$destroy()
        // const vm = vnode.$vnode.componentInstance
        // console.log('componentInstance: ', vm)
        // vm.$destroy()
      } else {
        alert('无缓存')
      }
      console.log('keep-alive已删除', this.$children)
    },
    removeCache() {
      this.$store.commit('REMOVE_CACHE', 'About')
      // this.routerCacheList = this.routerCacheList.filter(
      //   (item) => item !== 'About'
      // )
      // this.routerCacheList.push('About')
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

.nav {
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
