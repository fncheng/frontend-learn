<template>
  <div class="w-[600px] bg-red-300">
    <el-form :model="ruleForm" :rules="rules">
      <el-form-item label="姓名" prop="name">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Third',
  data() {
    return {
      ruleForm: {
        name: '',
        age: 0,
      },
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
