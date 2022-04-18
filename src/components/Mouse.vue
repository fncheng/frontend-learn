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
  setup(props, ctx) {
    const state = reactive({
      x: 0,
      y: 0,
    })
    const doMouseMove = debounce((e) => {
      state.x = e.clientX
      state.y = e.clientY
    }, 300)
    const handleInput = (e) => {
      ctx.emit('do-input', e)
    }
    return {
      debounce,
      state,
      doMouseMove,
      handleInput,
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
    }
  },
  render() {
    return (
      <div style="height: 100vh" onMousemove={this.doMouseMove}>
        {this.$attrs.render(this.state)}
        <el-input
          vModel={this.name}
          class="input"
          onInput={this.handleInput}
        ></el-input>
        <el-input vModel={this.name}></el-input>
        <el-table
          data={this.tableData}
          style="width:500px"
          cell-style={{ textAlign: 'center' }}
        >
          <el-table-column
            prop="name"
            label="姓名"
            width="100"
          ></el-table-column>
          <el-table-column prop="date" label="日期"></el-table-column>
          <el-table-column
            prop="address"
            label="住址"
            width="100"
            align="left"
          ></el-table-column>
        </el-table>
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
