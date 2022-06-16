<template>
  <div>
    <h2>{{ question.testName }}</h2>
    <el-radio-group v-model="radio">
      <el-radio label="A">{{ question.opA }}</el-radio>
      <el-radio label="B">{{ question.opB }}</el-radio>
      <el-radio label="C">{{ question.opC }}</el-radio>
      <el-radio label="D">{{ question.opD }}</el-radio>
    </el-radio-group>
    <br />
    <br />
    <el-button type="primary" @click="test">提交</el-button>
  </div>
</template>

<script>
import api from "@/request/network";

export default {
  name: "TestItem",
  props: ["name"],
  data() {
    return {
      radio: "F",
      question: {},
    };
  },
  created() {
    console.log("hehe sb");
    api
      .get("/test/getQuestion/1")
      .then((data) => {
        console.log(data);
        this.question = data.data.testInfo;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    //测试回答是否正确
    test: function () {
      if (this.radio == "F") {
        return;
      }
      if (this.radio == this.question.correct) {
        this.$message.success("答对啦");
      }
    },
    //获得选项文本
    getTheOption: function () {},
    //获得题目
    getTheQuestion: function () {},
  },
};
</script>

<style lang="scss" scoped>
</style>