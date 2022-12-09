<script>
export default {
  props: {
    msg: String,
  },
  mounted() {
    console.log(this.$attrs)
    console.log(this.name)
  },
  render() {
    console.log('child has render')
    return <div>{this.msg}</div>
  },
}
</script>
