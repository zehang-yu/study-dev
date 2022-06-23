<template>
  <div class="kp-box">
    <h4>测验列表</h4>
    <div class="kp-list-body">
      <ul class="kp-list">
        <li
          class="kp-list-item"
          :key="index"
          v-for="(item, index) in contentsInOnePage"
        >
          <input type="checkbox" name="choosed" value="item1" />{{ item.title }}
          <div class="button" @click="onDelete(item.queid)">删除</div>
        </li>
      </ul>
    </div>
    <div class="pagination-box-holder">
      <div class="pagination-box">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="pageSize"
          layout="prev, pager, next, jumper"
          :total="allContents.length"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { getAllTest } from "@/request/api";
import { deleteQuestion } from "@/request/api";

export default {
  created() {
    getAllTest().then((json) => {
      console.log(json);
      this.allContents = json.data.question;
      let end_index = //要显示的问题的末尾下标
        this.pageSize - 1 < this.allContents.length - 1
          ? this.pageSize - 1
          : this.allContents.length - 1;
      for (let i = 0; i <= end_index; ++i) {
        this.contentsInOnePage.push(this.allContents[i]);
      }
    });
  },

  data() {
    return {
      currentPage: 1,
      pageSize: 5,
      contentsInOnePage: [], //每页要显示在页面的题目内容
      allContents: [], //所有的题目内容
    };
  },

  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.contentsInOnePage = []; //清空表格
      let begin_index = (val - 1) * this.pageSize; //要显示的问题的起始下标
      let end_index = //要显示的问题的末尾下标
        begin_index + this.pageSize - 1 < this.allContents.length - 1
          ? begin_index + this.pageSize - 1
          : this.allContents.length - 1;

      for (let i = begin_index; i <= end_index; ++i) {
        this.contentsInOnePage.push(this.allContents[i]);
      }
    },
    onDelete(queid) {
      deleteQuestion(queid).then((json) => {
        console.log(json);
        alert("删除成功");
      });
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.kp-box {
  margin: 0 auto;
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
  height: 270px;
  text-align: left;
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
