<template>
  <iframe width="100%" height="100%" :src="src" frameborder="0"></iframe>
</template>

<script>
export default {
  name: 'iframe-view',
  props: {
    src: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>
