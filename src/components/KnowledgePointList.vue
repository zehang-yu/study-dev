<template>
  <div class="kp-box">
    <h4>知识点测验列表</h4>
    <select name="opration">
      <option value="select-all" placeholder=" ">选项一</option>
    </select>
    <div class="kp-list-body">
      <ul class="kp-list">
        <li class="kp-list-item">
          <input type="checkbox" name="choosed" value="item1" />知识点内容1
          <div class="button">修改</div>
          <div class="button">删除</div>
        </li>
        <li class="kp-list-item">
          <input type="checkbox" name="choosed" value="item1" />知识点内容2
          <div class="button">修改</div>
          <div class="button">删除</div>
        </li>
        <li class="kp-list-item">
          <input type="checkbox" name="choosed" value="item1" />知识点内容3
          <div class="button">修改</div>
          <div class="button">删除</div>
        </li>
        <li class="kp-list-item">
          <input type="checkbox" name="choosed" value="item1" />知识点内容4
          <div class="button">修改</div>
          <div class="button">删除</div>
        </li>
      </ul>
    </div>
    <div class="pagination-box-holder">
      <div class="pagination-box">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage3"
          :page-size="100"
          layout="prev, pager, next, jumper"
          :total="1000"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.kp-box {
  width: 700px;
}

.kp-box select {
  padding: 5px 10px;
  margin-top: 15px;
  margin-left: 25px;
  margin-bottom: 25px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

h4 {
  text-align: center;
}

.kp-list-body {
  padding: 0 20px;
}

li {
  list-style: none;
  padding: 20px 12px;
  font-size: 12px;
  border-bottom: 1px solid #ccc;
  align-items: center;
}

li input {
  width: 12px;
  height: 12px;
  margin-right: 8px;
}

ul li .button {
  float: right;
  margin-left: 15px;
  width: 45px;
  height: 25px;
  line-height: 25px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
}

ul li .button:hover {
  background-color: rgb(6, 169, 239);
  cursor: pointer;
  color: #fff;
}

.pagination-box {
  margin-top: 10px;
}

.pagination-box-holder {
  text-align: right;
  padding-top: 10px;
  padding-right: 35px;
}
</style>

<script>
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
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
    };
  },
};
</script>
