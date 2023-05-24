<template>
  <router-link :to="$attrs.to" custom v-slot="{ href, navigate, isActive }">
    <!-- {{ href }} {{ isActive }} {{ navigate }} 111{{ $attrs }} -->
    <a
      :href="href"
      :active="isActive"
      :class="isActive ? 'router-link-exact-active router-link-active' : ''"
    >
      <slot />
    </a>
  </router-link>
</template>

<script>
export default {
  name: 'AppLink',
  inheritAttrs: false,
  created() {
    console.log('attrs', this.$attrs)
  },
  methods: {
    handleClick(navigate) {
      console.log('click', this.$attrs, navigate)
    },
  },
}
</script>

<style></style>
