<template>
  <div>
    <h2>题目描述</h2>
    <el-radio v-model="radio" label="1">题目选项1</el-radio><br />
    <el-radio v-model="radio" label="2">题目选项2</el-radio><br />
    <el-radio v-model="radio" label="3">题目选项3</el-radio><br />
    <el-radio v-model="radio" label="4">题目选项4</el-radio><br />
    <el-button type="primary" v-on:click="test">提交</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "1",
      op1: false,
      op2: false,
      op3: false,
      op4: false,
    };
  },
  methods: {
    init: function () {},
    test: function () {},
    getTheOption: function () {},
    getTheQuestion: function () {},
  },
};
</script>
