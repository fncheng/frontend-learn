<template>
  <div>
    {{ counter.count }}
    <el-button>123</el-button>
  </div>
</template>

<script>
import { useCounterStore } from '@/store/counter'
export default {
  name: 'Pinia',
  setup() {
    const counter = useCounterStore()
    console.log('counter: ', counter)
    counter.count++
    counter.$patch({ count: counter.count + 1 })
    counter.increment()
    return { counter }
  },
}
</script>

<style></style>
