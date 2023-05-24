<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input type="text" v-model="msg" />
    <button @click="toggleShow">show HelloWorld</button>
    <div class="test" v-if="show">
      <about-child @click="number1++" :number="number1">
        <template #number>
          <span>{{ number1 }}</span>
        </template>
      </about-child>
      <about-child @click="number2++" :number="number2">
        <span slot="number">{{ number2 }}</span>
      </about-child>
      <about-child @click="number3++" :number="number3">
        <span slot="number">{{ number3 }}</span>
      </about-child>
    </div>
    <hello-world v-else />
  </div>
</template>

<script>
import AboutChild from '../components/AboutChild.vue'
// import HelloWorld from '../components/HelloWorld.vue'
const HelloWorld = () =>
  import(/* webpackChunkName: "helloworld" */ '../components/HelloWorld')
export default {
  components: { AboutChild, HelloWorld },
  name: 'About',
  data() {
    return {
      msg: '',
      ws: null,
      show: true,
      number1: 0,
      number2: 0,
      number3: 0,
    }
  },
  mounted() {
    if (window.WebSocket) {
      console.log('webscoket服务顺利运行!')
      const ws = new WebSocket('ws://localhost:3001')
      this.ws = ws
      this.ws.onopen = () => {
        console.log('onopen建立连接')
        ws.send('Hi')
      }
      this.ws.onmessage = (e) => {
        console.log('Message from', e)
      }
      this.ws.onerror = (e) => {
        console.log('连接失败', e)
      }
    }
  },
  updated() {
    console.log('组件更新')
  },
  methods: {
    toggleShow() {
      this.show = !this.show
    },
    handleClick1() {
      this.number1 = this.number1 + 1
    },
    handleClick2() {
      this.number2 = this.number2 + 1
    },
    handleClick3() {
      this.number3 = this.number3 + 1
    },
  },
}
</script>

<style lang="scss" scoped></style>
