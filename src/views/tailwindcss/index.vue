<template>
  <div>
    <div class="grid grid-cols-3 wrapper">
      <div class="box2">2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </div>

    <div>
      <span class="w-4 h-4">12324122142</span>
    </div>
    <p class="inline-flex items-center">
      <input
        class="w-4 h-4"
        type="checkbox"
        id="cbox1"
        value="first_checkbox"
        v-model="cbox1"
      />
      <label for="cbox1">测试1</label>
    </p>
    <p>
      <input type="checkbox" id="cbox2" v-model="cbox2" checked="checked" />
      <label for="cbox2">测试2</label>
    </p>
    <p>
      <el-checkbox v-model="cbox3">测试3</el-checkbox>
    </p>
    <el-row>
      <el-col :span="8"></el-col>
    </el-row>
    <div class="w-16">
      <span class="w-8">casdasdasdassdas</span>
      <label for="" class="w-8">dasdasdasdasdasdsa测试多撒点哈三大11</label>
    </div>
    <el-button @click="handleClick">无操作</el-button>
    <el-button @click="debounceClick">防抖</el-button>
    <el-button @click="throttleClick">节流</el-button>
    <el-form inline>
      <el-form-item class="w-64" label="请输入姓名">
        <el-input v-model="name"></el-input>
      </el-form-item>
      <el-form-item class="w-64" label="请输入姓名">
        <el-input v-model="name"></el-input>
      </el-form-item>
      <el-form-item class="w-64" label="请输入姓名">
        <el-input v-model="name"></el-input>
      </el-form-item>
    </el-form>
    <table>
      <tr>
        <td>111111</td>
        <td>222222</td>
        <td>333333</td>
      </tr>
    </table>
    <div style="width: 800px">
      <table>
        <tr>
          <td>
            <div style="width: 100%" class="flex">
              <div class="w-8">111</div>
              <div class="flex-1">222</div>
              <div class="w-8">333</div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { debounce, delay } from 'lodash-es'
export default {
  data() {
    this.debounce = debounce
    return {
      cbox1: false,
      cbox2: false,
      cbox3: false,
      name: '',
    }
  },
  created() {
    console.log(this)
  },
  methods: {
    throttleClick() {},
    debounceClick() {},
    handleClick() {
      console.log('do click!', debounce)

      delay(() => {
        console.log(123)
      }, 3000)
      // throttle()
      // debounce
    },
  },
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 120px;
}
/*  */
.box {
  /* width: 100px; */
  /* height: 100px; */
}
.box1 {
  grid-column: span 2 / span 2;
  /* grid-column: 1 / 3; */
}
.box1 {
  top: 10px;
  position: absolute;
  right: 20px;
  left: 30px;
  display: grid;
  grid-column: span 2 / span 2;
  width: 80rem;
  /* grid-column: 1 / 3; */
  height: 90rem;
}
/* table {
  border: 1px solid salmon;
  border-collapse: collapse;
} */
th,
td {
  border: 1px dashed;
  border-collapse: collapse;
}
</style>
