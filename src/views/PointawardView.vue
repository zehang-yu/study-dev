<template>
  <div class="block">
    <span class="demonstration">直接前往</span>
    <el-table :data="tableData" style="width: 100%" align="center">
      <el-table-column prop="name" label="知识点" width="180" align="center">
      </el-table-column>
      <el-table-column
        prop="point_type"
        label="分类"
        width="180"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="success_num"
        label="助教成功统计"
        width="180"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="defeat_num"
        label="助教失败统计"
        width="180"
        align="center"
      >
      </el-table-column>
      <el-table-column label="操作" width="120">
        <!-- style="{ background: 'blue' } -->
        <!-- <template slot-scope="scope">
          <el-button
            @click="scope.row.isActive = true"
            :style="{ background: scope.row.isActive ? 'red' : '' }"
            size="small"
            >查看</el-button
          >
        </template> -->
        <template slot-scope="scope"
          ><el-button @click="upd(scope.row)" size="small" round
            >更新</el-button
          ></template
        >
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="1"
      background
      layout="prev, pager, next, jumper"
      :total="100"
    >
    </el-pagination>
  </div>
</template>
<script>
// import { showInfo } from "@/request/api"
import { queryPoint } from "@/request/api";
import { updateHelper } from "@/request/api";
export default {
  methods: {
    upd(row) {
      updateHelper({
        name: row.name,
        type: row.type,
        success_num: row.success_num,
        defeat_num: row.defeat_num,
        award: row.award,
      })
        .then((res) => {
          console.log(res);
          alert("更新成功");
          queryPoint()
            .then((data) => {
              console.log(data);
              this.allcontents = data;
              this.tableData = [];
              for (let i = 0; i <= 2; i++)
                this.tableData.push(this.allcontents[i]);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
      // row.success_num=row.success_num+1;// eslint-disable-line no-unused-vars
    },
    open(color) {
      this.bgColor = color;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.tableData = [];
      this.contentdata = [];
      let begin_index = (val - 1) * 2;
      let end_index = begin_index + 2;
      for (let i = begin_index; i <= end_index; i++)
        this.tableData.push(this.allcontents[i]);
      // console.log(this.contentdata);
      // console.log(this.contentdata);
    },
  },
  data() {
    return {
      tableData: [
        {
          name: "知识点1",
          point_type: "章/节",
          success_num: "1",
          defeat_num: "1",
          award: "asdasd",
          isActive: false,
        },
      ],
      allcontents: [],
      contentdata: [],
      currentPage1: 1,
      currentPage2: 1,
      currentPage3: 1,
      currentPage4: 1,
    };
  },

  mounted() {
    queryPoint({ id: 3 })
      .then((data) => {
        console.log(data);
        this.allcontents = data;
        this.tableData = [];
        for (let i = 0; i <= 2; i++) this.tableData.push(this.allcontents[i]);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  // mounted() {
  //   updateHelper({ id: 3 })
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // },
};
</script>
