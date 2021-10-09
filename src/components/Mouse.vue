<template>
  <div style="height: 100vh" @click="doClick" @mousemove="doMouseMove">
    <slot :state="state"></slot>
  </div>
</template>

<script>
import { debounce } from 'lodash-es'
import { reactive } from '@vue/composition-api'
export default {
  data() {
    return {
      name: 'zs',
    }
  },
  setup() {
    const state = reactive({
      x: 0,
      y: 0,
    })
    function handleMouseMove(e) {
      debounce(() => {
        console.log(debounce)
        console.log(e)
        state.x = e.clientX
        state.y = e.clientY
      }, 300)()
    }
    const doMouseMove = debounce((e) => {
      console.log(state)
      console.log(e)
      state.x = e.clientX
      state.y = e.clientY
    }, 300)
    function handleMouseMoveDebounce(e) {
      debounce(handleMouseMove(e), 300)
    }
    return {
      debounce,
      state,
      handleMouseMove,
      handleMouseMoveDebounce,
      doMouseMove,
    }
  },
  methods: {
    doClick: debounce(() => {
      console.log('do click')
    }, 300),
    // doMouseMove: debounce(function () {
    //   console.log(this.state)
    // }, 300),
  },
}
</script>

<style></style>
