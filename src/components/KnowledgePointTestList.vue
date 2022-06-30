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
          {{ item.title }}
          <div class="button" @click="onDelete(item.queid, index)">删除</div>
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
    this.flushData();
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
    flushData() {
      getAllTest().then((json) => {
        console.log(json);
        this.allContents = json.data.question;
        let end_index = //要显示的问题的末尾下标
          this.pageSize - 1 < this.allContents.length - 1
            ? this.pageSize - 1
            : this.allContents.length - 1;

        this.contentsInOnePage = [];
        for (let i = 0; i <= end_index; ++i) {
          this.contentsInOnePage.push(this.allContents[i]);
        }
      });
    },
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
    onDelete(queid, index) {
      let tempOnePageArr = this.contentsInOnePage;
      let tempAllPageArr = this.allContents;
      this.contentsInOnePage = []; //清空表格
      this.allContents = [];
      if (tempOnePageArr.length == 1 && this.currentPage == 1) {
        //那一页只有一个数据并且是第一页
        //Do Nothing
      } else if (tempOnePageArr.length == 1) {
        //那一页只有一个数据
        this.currentPage -= 1;
        for (
          let i = tempAllPageArr.length - 1 - this.pageSize;
          i < tempAllPageArr.length - 1;
          ++i
        ) {
          this.contentsInOnePage.push(tempAllPageArr[i]);
        }
      } else {
        let cnt = 0; //计已经加了几条数据
        for (
          let i = (this.currentPage - 1) * this.pageSize;
          i < tempAllPageArr.length;
          ++i
        ) {
          if (tempAllPageArr[i].queid != queid) {
            this.contentsInOnePage.push(tempAllPageArr[i]);
            ++cnt;
          }
          if (cnt == this.pageSize) {
            //一页的条数够了就停下
            break;
          }
        }
      }

      for (let i = 0; i < tempAllPageArr.length; ++i) {
        if (tempAllPageArr[i].queid != queid) {
          this.allContents.push(tempAllPageArr[i]);
        }
      }

      console.log(queid + " " + index);
      deleteQuestion(queid).then((json) => {
        console.log(json);
        this.$message.success("删除成功");
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
