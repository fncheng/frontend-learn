<template>
  <div class="home">
    name: <input type="text" /> <br />
    age: <input type="number" name="" id="" />
    <div>
      total: <button @click="total = total + 1">{{ total }}</button>
    </div>
    <div>
      count: <button @click="count = count + 1">{{ count }}</button>
    </div>
    <HelloWorld :count="count" />
  </div>
</template>

<script>
const HelloWorld = () =>
  import(/* webpackChunkName: "helloworld" */ '../components/HelloWorld.vue')
// import HelloWorld from '../components/HelloWorld.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: { HelloWorld },
  data() {
    return {
      total: 0,
      count: 10,
    }
  },
  created() {
    console.log(this)
  },
  mounted() {
    console.log('父组件挂载')
  },
  updated() {
    console.log('父组件更新')
  },
}
</script>
