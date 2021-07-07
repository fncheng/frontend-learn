<template>
  <div ref="container" style="width: 600px; height: 400px"></div>
</template>

<script>
import { onMounted, ref } from '@vue/composition-api'
import * as echarts from 'echarts'
export default {
  name: 'Line',
  setup() {
    const container = ref(null)
    const options = {
      title: {
        text: 'line折线图',
      },
      legend: {
        data: ['data1'],
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'data1',
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: 0.5,
        },
      ],
    }
    onMounted(() => {
      const myChart = echarts.init(container.value)
      myChart.setOption(options)
    })
    return { container }
  },
}
</script>

<style></style>
