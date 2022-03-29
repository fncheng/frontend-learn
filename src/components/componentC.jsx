import { useCounterStore } from '@/store/counter'
import { Button } from 'element-ui'
/* eslint-disable */
const counter = useCounterStore()

let ComponentC = (props) => {
  console.log('props: ', props)
  return (
    <div>
      <button
        onClick={() => {
          console.log(123)
        }}
      >
        click me
      </button>
      <Button
        onClick={() => {
          counter.increment()
        }}
      >
        {counter.count}
      </Button>
      <RouterLink to="/">Home</RouterLink> |
      <router-link to="/about">About</router-link>
    </div>
  )
}

export default ComponentC
