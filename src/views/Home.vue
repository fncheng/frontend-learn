<template>
  <div class="home">
    <button @click="click">click</button>
    <button @click="handleClick">click</button>
    <div>{{ a }}</div>
    <div>{{ arr }}</div>
    <div>{{ arr2 }}</div>
    <Child>
      <template v-slot:header>
        <div>this is header</div>
      </template>
      <div>this is body</div>
    </Child>
    <user :obj="'123'">
      <template v-slot:default="slotProps">
        {{ slotProps }}
        {{ slotProps.obj }}
      </template>
    </user>

    <user v-slot="slotProps">
      {{ slotProps }}
    </user>
    <user></user>
  </div>
</template>

<script>
import { reactive, ref } from '@vue/composition-api'
import Child from '../components/Child.vue'
import User from '../components/User.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: { Child, User },
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
