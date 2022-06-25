<template >
  <div>
    <h2>{{ question.title }}</h2>
    <el-radio-group v-model="radio">
      <el-radio label="1">是</el-radio>
      <el-radio label="0">否</el-radio>
    </el-radio-group>
    <br />
    <br />
    <el-button type="primary" @click="test">提交</el-button>
  </div>
</template>

<script>
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
      if (this.radio == "F") {
        return;
      }
      if (this.radio == this.question.ans) {
        this.$message.success("答对啦");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>