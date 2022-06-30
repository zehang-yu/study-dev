<template>
  <div>
    <h2>{{ question.title }}</h2>
    <el-radio-group v-model="radio">
      <el-radio label="对">是</el-radio>
      <el-radio label="错">否</el-radio>
    </el-radio-group>
    <br />
    <br />
    <el-button type="primary" @click="test">提交</el-button>
  </div>
</template>

<script>
import { studentAnswerJudge } from "@/request/api";
export default {
  name: "judgeItem",
  question: [],
  props: ["name", "question"],
  data() {
    return {
      radio: "F",
      id: 0,
    };
  },

  methods: {
    //测试回答是否正确
    test: function () {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      console.log(this.question.judgeQueid);

      console.log(this.radio);
      if (this.radio != this.question.ans) {
        studentAnswerJudge({
          studentId: userInfo.userId,
          questionId: this.question.judgeQueid,
          record: 0,
        })
          .then((json) => {
            console.log(json);
          })
          .catch((err) => {
            console.log(err);
          });
        this.$message.error("答错啦");
        return;
      }
      if (this.radio === this.question.ans) {
        studentAnswerJudge({
          studentId: userInfo.userId,
          questionId: this.question.judgeQueid,
          record: 1,
        })
          .then((json) => {
            console.log(json);
            console.log(
              "ID: " + userInfo.userId,
              "qID: " + this.question.judgeQueid
            );
          })
          .catch((err) => {
            console.log(err);
          });
        this.$message.success("答对啦");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
