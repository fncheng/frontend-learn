import { Input, Progress } from 'element-ui'
import { ref } from '@vue/composition-api'

export default {
  name: 'ThridChild1',
  data() {
    return {
      name: '',
    }
  },
  setup() {
    const msg = ref('')
    return {
      msg,
    }
  },
  render() {
    return (
      <div>
        <span>some</span>
        <div>
          <Progress percentage={50} />
          <Input
            vModel={this.msg}
            onInput={(e) => {
              console.log(e)
            }}
            onChange={(e) => {
              console.log(e)
            }}
          ></Input>
          <el-input vModel={this.name}></el-input>
        </div>
      </div>
    )
  },
}
