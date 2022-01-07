import { ref } from '@vue/composition-api'
import { Button } from 'element-ui'
const b = ref('b')

/* eslint-disable */
const ComponentA = (props) => {
  console.log('props: ', props);
  const a = ref('123')
  console.log('a: ', a.value)
  return (
    <div>
      <h3>{a.value}</h3>
      <h4>{b.value}</h4>
      <button
        onClick={() => {
          console.log(123)
        }}
      >
        click me
      </button>
      <el-button
        onClick={() => {
          console.log('ele click')
        }}
      >
        ele click
      </el-button>
      <Button
        onClick={() => {
          console.log('ele click')
        }}
      >
        ele click
      </Button>
    </div>
  )
}

export default ComponentA
