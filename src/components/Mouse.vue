<script>
import { debounce } from 'lodash-es'
import { reactive } from '@vue/composition-api'
export default {
  name: 'Mouse',
  data() {
    return {
      name: 'zs',
    }
  },
  setup() {
    const state = reactive({
      x: 0,
      y: 0,
    })
    const doMouseMove = debounce((e) => {
      state.x = e.clientX
      state.y = e.clientY
    }, 300)
    return {
      debounce,
      state,
      doMouseMove,
    }
  },
  render() {
    return (
      <div style="height: 100vh" onMousemove={this.doMouseMove}>
        {this.$attrs.render(this.state)}
        <el-input vModel={this.name} class="input"></el-input>
      </div>
    )
  },
}
</script>

<style>
.input {
  width: 250px;
}
</style>
