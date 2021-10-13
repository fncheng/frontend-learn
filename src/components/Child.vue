<script>
import { ref } from '@vue/composition-api'
export default {
  name: 'Child',
  setup() {
    const a = ref('123')
    return { a }
  },
  render() {
    return (
      <div>
        <div class="header">{this.$slots.header}</div>
        <div class="body">{this.$slots.default}</div>
        <div class="footer">{this.$slots.footer}</div>
      </div>
    )
  },
}
</script>

<style lang="scss" scoped>
.header {
  color: blue;
}
.body {
  color: gold;
}
.footer {
  color: red;
}
</style>
