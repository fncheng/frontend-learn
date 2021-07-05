<template>
  <div class="app-wrapper">
    <Sidebar class="sidebar-container"></Sidebar>
    <AppMain />
  </div>
</template>

<script>
import Sidebar from './Sidebar'
import AppMain from './AppMain.vue'
export default {
  name: 'Layout',
  components: {
    Sidebar,
    AppMain,
  },
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
