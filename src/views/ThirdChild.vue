<script>
export default {
  props: {
    msg: String,
  },
  mounted() {
    console.log(this.$attrs)
    console.log(this.name)
  },
  render(h) {
    console.log('child has render')
    return h('div', { class: 'third-child' }, [h('h3', 'xxxx'), h('p', 'abc')])
  },
}
</script>
