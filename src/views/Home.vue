<template>
  <div class="home">
    <button @click="click">click</button>
    <button @click="handleClick">click</button>
    <div>{{ a }}</div>
    <div>{{ arr }}</div>
    <div>{{ arr2 }}</div>
  </div>
</template>

<script>
import { reactive, ref } from '@vue/composition-api'
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      obj1: {
        name: 'zs',
        age: 18,
      },
      arr2: [],
    }
  },
  setup() {
    let a = ref([])
    let arr = reactive([])
    function click() {
      a.value = [1, 2, 3]
      // arr = [1, 3, 3]
      arr.push(1, 2, 3)
    }
    return { a, arr, click }
  },
  methods: {
    handleClick() {
      this.arr2 = [3, 4, 5]
    },
  },
}
</script>
