<template>
  <div class="about">
    <div>{{ name }}</div>
    <button @click="setName">setName</button>
  </div>
</template>

<script>
export default {
  setup() {},
  computed: {
    name() {
      return this.$store.state.user.name
    },
  },
  mounted() {
    console.log(this.$store.state)
  },
  methods: {
    setName() {
      this.$store.dispatch('user/setName', '123')
    },
  },
}
</script>
