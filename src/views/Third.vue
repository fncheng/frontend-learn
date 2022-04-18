<template>
  <div>
    <div>{{ count }}</div>
    <button @click="handleClick">count++</button>
    <ThirdChild class="mt-4" msg="123" />
  </div>
</template>

<script>
import ThirdChild from './ThirdChild.vue'
export default {
  name: 'Third',
  components: {
    ThirdChild,
  },
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    handleClick() {
      this.count++
    },
  },
}
</script>

<style scoped>
.progress-wrapper {
  height: 1rem;
}
</style>
