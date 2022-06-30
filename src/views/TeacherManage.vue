<template>
  <div class="block">
    <el-table :data="tableData" style="width: 100%" align="center">
      <el-table-column prop="stu_name" label="姓名" width="180" align="center">
      </el-table-column>
      <el-table-column prop="q_title" label="错题" width="180" align="center">
      </el-table-column>

      <!--   <el-table-column
        prop="helper_stu_id"
        label="助教"
        width="300"
        
        :filter-method="filterteachers"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-select v-model="value" placeholder="请选择助教">
            <el-option
              v-for="item in scope.row.teachers"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </template>
      </el-table-column> -->
      <el-table-column label="选择助教" align="center">
        <template >
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.stu_name"
              :label="item.zhuJiao_name"
              :value="item.stu_name"
            >
            </el-option>
          </el-select>
        </template>
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
import { studentCuoTiList } from "@/request/api";
export default {
  methods: {
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
          stu_name: "",
          q_title: "",
          isActive: false,
          // zhuJiao_name: "",
          // value: "选项",
        },
      ],
      options: [
        {
          stu_name: "",
          q_title: "",
          isActive: false,
          zhuJiao_name: "",
          // zhuJiao_name: "",
          // value: "选项",
        },
      ],
      value: "",
      allcontents: [],
      contentdata: [],
      currentPage1: 1,
      currentPage2: 1,
      currentPage3: 1,
      currentPage4: 1,
    };
  },

  mounted() {
    studentCuoTiList()
      .then((data) => {
        console.log("xxx");
        // console.log(data);
        console.log(data.data.CuoTiList);
        console.log(data.data.CuoTiList);
        console.log(data.data.CuoTiList);
        this.allcontents = data.data.CuoTiList;
        this.tableData = [];
        this.options = data.data.CuoTiList;
        // this.options=data.data.CuoTiList;
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
