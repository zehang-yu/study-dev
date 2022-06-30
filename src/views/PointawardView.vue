<template>
  <div class="block">
    <span class="demonstration"></span>
    <el-table
      :data="tableData"
      style="width: 120%"
      align="center"
      size="medium"
    >
      <el-table-column
        prop="kp_id"
        label="知识点"
        height="200"
        width="200"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="que_id"
        label="分类"
        height="200"
        width="200"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="success_time"
        label="助教成功统计"
        width="200"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="fail_time"
        label="助教失败统计"
        width="200"
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
        <!-- <template slot-scope="scope" 
          ><el-button @click="upd(scope.row)" type="text" round
            >更新</el-button
          ></template
        > -->
        <template slot-scope="scope">
          <el-badge is-dot="false" hidden="false" class="item">
            <el-button @click="upd(scope.row)" type="text">获取奖励</el-button>
          </el-badge>
        </template>
        .item { margin-top: 10px; margin-right: 40px; }
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="1"
      background
      layout="prev, pager, next, jumper"
      :total="10"
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
        stu_id: row.kp_id,
        que_id: row.que_id,
        success_time: row.success_time,
        fail_time: row.fail_time,
      })
        .then((res) => {
          console.log(res);
          alert("更新成功");
          console.log(row);
          // row.isdotjudge="true";
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
          alert("更新失败");
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
          kp_id: "知识点1",
          que_id: "章/节",
          success_time: "1",
          fail_time: "1",
          // award: "asdasd",
          isActive: false,
          isdotjudge:true,
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
};
</script>
