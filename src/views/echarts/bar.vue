<template>
  <div ref="container" style="width: 600px; height: 400px"></div>
</template>

<script>
import { onMounted, ref } from '@vue/composition-api'
import * as echarts from 'echarts'
export default {
  name: 'Bar',
  setup() {
    const container = ref(null)
    const options = {
      title: {
        text: 'ECharts横向柱状图',
      },
      tooltip: {},
      legend: {
        data: ['一月销量', '二月销量'],
        right: '25%',
      },
      yAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      xAxis: {},
      series: [
        {
          name: '一月销量',
          type: 'bar',
          stack: '业务',
          data: [5, 20, 36, 10, 10, 20],
        },
        {
          name: '二月销量',
          type: 'bar',
          stack: '业务',
          data: [15, 25, 26, 20, 10, 20],
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
