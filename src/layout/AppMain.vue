<template>
  <section class="app-main">
    <router-view :key="key" />
  </section>
</template>

<script>
import { computed } from '@vue/composition-api'
import router from '@router/index'
export default {
  name: 'AppMain',
  setup() {
    console.log('this: ', router)
    const key = computed(() => router.currentRoute.path)
    return { key }
  },
}
</script>

<style></style>
