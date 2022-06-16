<template>
  <div class="add-test-kp-form">
    <h4>添加知识点测试题目</h4>
    <div class="form-box">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="题目内容">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="题目类型">
          <el-select v-model="form.region" placeholder="请选择题目类型">
            <el-option label="判断题" value="TorF"></el-option>
            <el-option label="选择题" value="choice"></el-option>
            <el-option label="填空题" value="blankfill"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="选项1">
          <el-row>
            <el-input v-model="form.desc"></el-input>
          </el-row>
        </el-form-item>
        <el-form-item label="选项2">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="选项3">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="选项4">
          <el-input type="textarea" v-model="form.desc"></el-input>
          <el-switch v-model="form.delivery"></el-switch>
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
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
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
