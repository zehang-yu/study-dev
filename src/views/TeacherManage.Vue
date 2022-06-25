<template>
  <div>
    <el-table ref="filterTable" :data="tableData" style="width: 100%">
      <!-- //by cjy -->
      <el-table-column prop="name" label="姓名" width="280"> </el-table-column>

      <el-table-column prop="fault" label="错题题号" :formatter="formatter">
      </el-table-column>
      <el-table-column prop="teachers" label="助教" width="300">
        <template slot-scope="scope">
          <el-select v-model="scope.row.currentTeacherId" placeholder="请选择">
            <el-option
              v-for="item in scope.row.teachers"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { selectTeacher } from "@/request/network";

export default {
  data() {
    return {
      tableData: [
        {
          name: "张",
          fualt: "错题1",
          teachers: [{ id: 1, name: "chen" }],
          currentTeacherId: "",
        },
        {
          name: "李",
          fualt: "错题2",
          teachers: [{ id: 1, name: "lurongkun" }],
        },
        {
          name: "陆",
          fualt: "错题3",
          teachers: [{ id: 1, name: "lurongkun" }],
        },
        {
          name: "陈",
          fualt: "错题4",
          teachers: [{ id: 1, name: "lurongkun" }],
        },
      ],
    };
  },
  methods: {
    resetDateFilter() {
      this.$refs.filterTable.clearFilter("date");
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    formatter(row) {
      return row.fualt;
    },
    filterteachers(value, row) {
      return row.teachers === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    handleChange(problem, id) {
      console.log(id);
      problem.currentTeacherId = id;
    },
  },

  mounted() {
    selectTeacher({ id: 123 })
      .then((data) => {
        console.log(data);
        this.tableData = data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
