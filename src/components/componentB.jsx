/* eslint-disable */

export default {
  name: 'ComponentB',
  created() {
    console.log('comb', this.$attrs)
  },
  props: {
    name: String
  },
  render() {
    return (
      <div>
        <h3>ommB</h3>
        <span>{this.$attrs.name}</span>
      </div>
    )
  }
}
