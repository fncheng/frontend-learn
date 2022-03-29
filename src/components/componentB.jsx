/* eslint-disable */
import {useCounterStore} from '@/store/counter'

const counter = useCounterStore()
console.log('counter.count: ', counter.count);

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
