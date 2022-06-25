<template >
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
import { studentAnswer } from "@/request/api";
export default {
  name: "TestItem",
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
      console.log(this.question.choiceQueid);

      console.log(this.radio);
      if (this.radio != this.question.correct) {
        studentAnswer({
          studentId: userInfo.userId,
          questionId: this.question.choiceQueid,
          record: 0,
        })
          .then((json) => {
            console.log(json);
            alert("插入成功");
          })
          .catch((err) => {
            console.log(err);
          });
        return;
      }
      if (this.radio === this.question.correct) {
        studentAnswer({
          studentId: userInfo.userId,
          questionId: this.question.choiceQueid,
          record: 1,
        })
          .then((json) => {
            console.log(json);
            console.log(
              "ID: " + userInfo.userId,
              "qID: " + this.question.choiceQueid
            );
            alert("插入成功");
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

<style lang="scss" scoped>
</style>