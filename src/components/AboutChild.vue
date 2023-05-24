<template>
  <div>
    <button @click="handleClick">
      <slot name="number"></slot>
    </button>
    <span>{{ Math.random() }}</span>
  </div>
</template>

<script>
export default {
  props: {
    number: Number,
  },
  updated() {
    console.log('child component update')
  },
  methods: {
    handleClick() {
      this.$emit('click')
    },
  },
}
</script>

<style></style>
