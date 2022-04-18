<script>
export default {
  props: {
    msg: String,
  },
  render() {
    console.log('child has render')
    return <div>{this.msg}</div>
  },
}
</script>
