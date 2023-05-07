<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  name: 'About',
  mounted() {
    console.log('About')

    if (window.WebSocket) {
      console.log('webscoket服务顺利运行!')
      const ws = new WebSocket('ws://localhost:3000/socketTest')
      ws.onopen = (e) => {
        console.log('onopen')
        ws.send('Hi', e)
      }
      ws.onmessage = (e) => {
        console.log('Message from', e)
      }
      ws.onerror = (e) => {
        console.log('连接失败', e)
      }
    }
  },
}
</script>
