<script>
export default {
  name: 'User',
  props: {
    obj: String,
  },
  data() {
    return {
      user: {
        firstName: 'first',
        lastName: 'last',
      },
    }
  },
  render() {
    return (
      <div>
        <div class="header">{this.$slots.header}</div>
        <div class="body" obj={this.obj}>
          {this.$scopedSlots.default(this.$props)}
        </div>
      </div>
    )
  },
}
</script>

<style></style>
