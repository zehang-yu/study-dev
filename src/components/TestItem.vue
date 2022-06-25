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
      if (this.radio == "F") {
        return;
      }
      if (this.radio == this.question.correct) {
        this.$message.success("答对啦");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>