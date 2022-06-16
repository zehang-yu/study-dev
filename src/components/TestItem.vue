<template>
  <div>
    <h2>题目描述</h2>
    <el-radio-group v-model="radio">
      <el-radio :label="A">{{ options[0] }}</el-radio>
      <el-radio :label="B">{{ options[1] }}</el-radio>
      <el-radio :label="C">{{ options[2] }}</el-radio>
      <el-radio :label="D">{{ options[3] }}</el-radio>
    </el-radio-group>
    <el-button type="primary" @click="test">提交</el-button>
  </div>
</template>

<script>
import api from "@/request/network";

export default {
  name: "TestItem",
  props: ["name", "options"],
  data() {
    return {
      radio: "F",
      correct: "",
    };
  },
  created() {
    this.correct = "A";
  },
  methods: {
    //测试回答是否正确
    test: function () {},
    //获得选项文本
    getTheOption: function () {},
    //获得题目
    getTheQuestion: function () {},
  },
};
</script>

<style lang="scss" scoped>
</style>