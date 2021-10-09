<template>
  <p>当前鼠标的位置是({{ mouse.x }},{{ mouse.y }})</p>
</template>

<script>
// import { computed } from "@vue/composition-api";
export default {
  props: {
    mouse: {
      type: Object,
    },
  },
  // setup(props) {
  //   const mouse = computed(() => props.p_mouse);
  //   return { mouse };
  // },
}
</script>

<style></style>
