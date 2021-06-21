<template>
  <div>
    <validation-provider rules="secret" v-slot="{ errors }">
      <input type="text" v-model="email" />
      <span class="error">{{ errors[0] }}</span>
    </validation-provider>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
    }
  },
}
</script>

<style lang="scss" scoped>
.error {
  color: red;
}
</style>
