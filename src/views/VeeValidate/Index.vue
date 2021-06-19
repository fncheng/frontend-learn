<template>
  <div>
    <validation-provider rules="secret" v-slot="{ errors }">
      <input type="text" v-model="email" />
      <span>{{ errors[0] }}</span>
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

<style></style>
