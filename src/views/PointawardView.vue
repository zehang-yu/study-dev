<template>
  <div class="block">
    <span class="demonstration">直接前往</span>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="point" label="知识点" width="180" align="center">
      </el-table-column>
      <el-table-column prop="type" label="分类" width="180" align="center">
      </el-table-column>
      <el-table-column
        prop="success"
        label="助教成功统计"
        width="180"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="defeat"
        label="助教失败统计"
        width="180"
        align="center"
      >
      </el-table-column>
      <el-table-column label="操作" width="120">
        <template>
          <el-popconfirm title="这是一段内容确定删除吗？">
            <el-button slot="reference">删除</el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="100"
      background
      layout="prev, pager, next, jumper"
      :total="1000"
    >
    </el-pagination>
  </div>
</template>
<script>
// import { queryPoint } from "@/request/network";
export default {
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
  data() {
    return {
      tableData: [
        {
          point: "知识点1",
          type: "章/节",
          success: "1",
          defeat: "1",
          operate: "asdasd",
        },
      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
    };
  },

  // mounted() {
  //   queryPoint({ id: 123 })
  //     .then((data) => {
  //       console.log(data);
  //       this.tableData = data;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // },
};
</script>
