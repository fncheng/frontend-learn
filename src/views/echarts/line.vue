<template>
  <div ref="container"></div>
</template>

<script>
import { onMounted, ref } from '@vue/composition-api'
import * as echarts from 'echarts'
export default {
  name: 'bar',
  setup() {
    const container = ref(null)
    const options = {}
    onMounted(() => {
      const myChart = echarts.init(container.value)
      myChart.setOption(options)
    })
    return { container }
  },
}
</script>

<style></style>
