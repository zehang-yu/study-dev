<template>
  <div class="add-test-kp-form">
    <h4>添加知识点测试题目</h4>
    <div class="form-box">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="题目内容">
          <el-input type="textarea" v-model="form.content"></el-input>
        </el-form-item>
        <el-form-item label="题目类型">
          <el-select v-model="form.questionType" placeholder="请选择题目类型">
            <el-option label="判断题" value="judge"></el-option>
            <el-option label="选择题" value="choice"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="选项1">
          <el-input type="textarea" v-model="form.optionA"></el-input>
          <el-switch v-model="form.deliveryA"></el-switch>
        </el-form-item>
        <el-form-item label="选项2">
          <el-input type="textarea" v-model="form.optionB"></el-input>
          <el-switch v-model="form.deliveryB"></el-switch>
        </el-form-item>
        <el-form-item label="选项3">
          <el-input type="textarea" v-model="form.optionC"></el-input>
          <el-switch v-model="form.deliveryC"></el-switch>
        </el-form-item>
        <el-form-item label="选项4">
          <el-input type="textarea" v-model="form.optionD"></el-input>
          <el-switch v-model="form.deliveryD"></el-switch>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">添加</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        content: "",
        questionType: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        deliveryA: false,
        deliveryB: false,
        deliveryC: false,
        deliveryD: false,
        type: [],
        resource: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style scoped>
h4 {
  text-align: center;
}

.add-test-kp-form {
  margin: 0 auto;
  text-align: left;
  width: 500px;
}
</style>
