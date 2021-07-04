<template>
  <div class="home">
    <el-tabs v-model="activeName" @tab-click="tabClick">
      <el-tab-pane
        v-for="item in tabs"
        :key="item.name"
        :label="item.label"
        :name="item.name"
      ></el-tab-pane>
      <router-view></router-view>
    </el-tabs>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      activeName: 'first',
      tabs: [
        { name: 'first', label: '用户管理' },
        { name: 'second', label: '配置管理' },
        { name: 'third', label: '角色管理' },
      ],
    }
  },
  methods: {
    tabClick(e) {
      this.$router.push(e.name).catch(() => {
        return
      })
    },
  },
}
</script>
