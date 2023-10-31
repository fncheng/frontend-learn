<template>
  <div class="index">
    <el-table
      :data="tableData"
      border
      :header-cell-class-name="'table-header-class'"
    >
      <el-table-column label="姓名">
        <template slot-scope="scope">
          <el-input v-if="scope.row.isEdit" v-model="scope.row.date"></el-input>
          <span v-else>{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="姓名">
        <template slot-scope="scope">
          <el-input v-if="scope.row.isEdit" v-model="scope.row.name"></el-input>
          <span v-else>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="editItem(scope.row, scope.$index)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-input v-if="tableData[0].isEdit">true</el-input>
    <span v-else>false</span>
    <div v-show="tableData[0].isEdit">12312312312</div>
    <button
      @click="
        tableData[0].isEdit = !tableData[0].isEdit
        num = 100
      "
    >
      Btn
    </button>
  </div>
</template>

<script>
export default {
  data() {
    this.num = 1
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          isEdit: false,
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          isEdit: false,
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
      ],
      columnList: [
        { prop: 'date', label: '日期', show: true },
        { prop: 'date', label: '姓名', show: true },
        { prop: 'date', label: '名称', show: false },
      ],
    }
  },
  computed: {
    columnListShow() {
      return this.columnList.filter((item) => item.show)
    },
  },
  created() {
    this.tableData.forEach((item) => {
      console.log(item)
      this.$set(item, 'isEdit', false)
    })
    this.boolean = false
    // this.tableData = this.tableData.map((item) => (item.isEdit = false))
  },
  methods: {
    editItem(row, index) {
      console.log(row, index)
      this.tableData[index].isEdit = true
    },
  },
  updated() {
    console.log(this.num)
  },
}
</script>

<style scoped>
.index >>> .table-header-class {
  background-color: red;
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
