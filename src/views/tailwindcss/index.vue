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
      <span class="w-4 h-4 border-2 bg-gray-50 bottom-4">12324122142</span>
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
    <div class="w-full h-12">
      <!-- <div>123</div> -->
      <div class="float-right w-64 h-12 bg-red-400">123</div>
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
