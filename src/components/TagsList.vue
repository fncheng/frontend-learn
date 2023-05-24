<template>
  <div>
    <span v-for="item in list" :key="item">{{ item }}</span>
  </div>
</template>

<script>
export default {
  name: 'TagsList',
  data() {
    return {
      list: [1, 3, 5],
    }
  },
}
</script>

<style></style>
