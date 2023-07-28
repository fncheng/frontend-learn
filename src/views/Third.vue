<template>
  <div class="flex flex-col justify-center items-center">
    <el-form
      style="width: 600px; margin-top: 20px"
      :model="ruleForm"
      :rules="rules"
      label-position="left"
      label-width="auto"
    >
      <div v-for="(item, index) in ruleForm.formdata" :key="index">
        <el-form-item
          label="用户姓名"
          :prop="`formdata.${index}.name`"
          :rules="rules.name"
        >
          <el-input v-model="item.name"></el-input>
        </el-form-item>
        <el-form-item
          label="年龄"
          :prop="`formdata.${index}.age`"
          :rules="rules.age"
        >
          <el-input v-model.number="item.age"></el-input>
        </el-form-item>
      </div>
      <el-button @click="addFormItem">addFormItem</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Third',
  data() {
    return {
      ruleForm: {
        formdata: [{ name: '', age: '' }],
      },
      rules: {
        name: [{ required: true, message: 'name is required!' }],
        age: [
          { required: true, message: 'age is required!' },
          {
            validator: (rule, value, callback) => {
              console.log(value)
              if (value) {
                //
              }
              callback()
            },
          },
        ],
      },
    }
  },
  methods: {
    addFormItem() {
      this.ruleForm.formdata.push({
        name: '',
        age: 100,
      })
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
