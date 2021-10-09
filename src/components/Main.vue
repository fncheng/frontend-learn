<template>
  <div>
    <h1>移动鼠标！</h1>
    <Mouse>
      <template v-slot:default="scope">
        {{ scope.state }}
        <Cat :mouse="scope.state" />
      </template>
    </Mouse>
  </div>
</template>

<script>
import Mouse from './Mouse'
import Cat from './Cat'
export default {
  components: {
    Mouse,
    Cat,
  },
}
</script>

<style></style>
