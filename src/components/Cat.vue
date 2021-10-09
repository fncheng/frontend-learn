<script>
// import { computed } from "@vue/composition-api";
export default {
  props: {
    mouse: {
      type: Object,
    },
  },
  render() {
    return (
      <p>
        当前鼠标的位置是({this.mouse.x},{this.mouse.y})
      </p>
    )
  },
}
</script>

<style></style>
