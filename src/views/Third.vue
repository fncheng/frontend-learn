<template>
  <div>
    <div>{{ count }}</div>
    <button @click="handleClick">count++</button>
    <ThirdChild class="mt-4" msg="123" :name="'zs'" age="20" />
    <input class="hover:bg-gray-600" type="text" maxlength="3" />
    <sup class="bg-green-100 cursor-pointer hover:bg-gray-600">。</sup>C
    <button @click="handleClose">destroy</button>
    <el-button>1</el-button>
    <el-button>2</el-button>
    <el-button>3</el-button>
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
    handleClose() {
      this.$destroy()
    },
  },
}
</script>

<style scoped>
.progress-wrapper {
  height: 1rem;
}
</style>
