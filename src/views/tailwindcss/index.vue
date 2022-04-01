<template>
  <div class="grid grid-cols-3 wrapper">
    <div class="box1 bg-green-500">1</div>
    <div class="box2">2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 120px;
}
.box {
  /* width: 100px; */
  /* height: 100px; */
}
.box1 {
  grid-column: span 2 / span 2;
  /* grid-column: 1 / 3; */
}
</style>
