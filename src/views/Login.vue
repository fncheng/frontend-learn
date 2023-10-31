<template>
  <div class="login-wrapper">
    <el-form label-position="left">
      <el-form-item label="用户名">
        <el-input type="text" v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="password"></el-input>
      </el-form-item>
      <el-button @click="handleLogin">登录</el-button>
    </el-form>
  </div>
</template>

<script>
import { getLogin } from '@/api/home'
import { Message } from 'element-ui'
export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  updated() {
    console.log('component updated')
  },
  methods: {
    async handleLogin() {
      if (this.username && this.password) {
        //   let res = await getLogin({
        //     username: this.username,
        //     password: this.password,
        //   })
        //   if (res.data.code === 200) {
        this.$store.commit('SET_LOGIN', true)
        this.$router.push('/')
        // } else {
        //   Message.error('登录失败')
        // }
      }
    },
  },
}
</script>

<style scoped>
.login-wrapper {
  display: flex;
  justify-content: center;
}
</style>
