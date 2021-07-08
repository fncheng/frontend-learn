<template>
  <div class="about">
    <div>{{ name }}</div>
    <button @click="setName">setName</button>
    <div
      id="container"
      ref="container"
      style="width: 600px; height: 400px"
    ></div>
  </div>
</template>

<script>
import { onMounted, ref } from '@vue/composition-api'
import store from '@store/index'
console.log('store', store)
export default {
  name: 'About',
  setup() {
    const container = ref(null)
    onMounted(() => {})
    return { container }
  },
  computed: {
    name() {
      return this.$store.state.user.name
    },
  },
  mounted() {
    console.log(this.$store.state)
  },
  methods: {
    setName() {
      this.$store.dispatch('user/setName', '123')
      console.log(this)
    },
  },
}
</script>
