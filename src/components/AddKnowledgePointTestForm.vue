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
            <el-option label="选择题" value="choice"></el-option>
            <el-option label="判断题" value="judge"></el-option>
          </el-select>
        </el-form-item>

        <template v-if="form.questionType === 'choice'">
          <el-form-item
            :label="`选项${index + 1}`"
            :key="index"
            v-for="(item, index) in form.options"
          >
            <div class="testarea-holder">
              <el-input type="textarea" v-model="item.optionName"></el-input>
            </div>
            <el-switch v-model="item.delivery"></el-switch>
          </el-form-item>
        </template>

        <div class="judge-ans-holder" v-else>
          <el-switch v-model="form.corrent"></el-switch>正确
          <el-switch v-model="form.wrong"></el-switch> 错误
        </div>

        <div class="buttom-holder">
          <el-form-item>
            <el-button type="primary" @click="onSubmit">添加</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
//把api里面的对象引进来
import { insertChoiceQuestion } from "@/request/api";
export default {
  data() {
    return {
      form: {
        content: "",
        questionType: "choice",
        options: [
          { optionName: "", delivery: false },
          { optionName: "", delivery: false },
          { optionName: "", delivery: false },
          { optionName: "", delivery: false },
        ],
        correct: false,
        wrong: false,
      },
    };
  },

  methods: {
    onSubmit() {
      let _ans = "";
      for (let i = 0; i < this.form.options.length; ++i) {
        if (this.form.options[i].delivery == true) {
          _ans = String.fromCharCode("A".charCodeAt(0) + i);
          break;
        }
      }

      insertChoiceQuestion({
        title: this.form.content,
        opA: this.form.options[0].optionName,
        opB: this.form.options[1].optionName,
        opC: this.form.options[2].optionName,
        opD: this.form.options[3].optionName,
        ans: _ans,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
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

.testarea-holder {
  display: inline-block;
  padding-right: 15px;
  width: 365px;
}

.buttom-holder {
  text-align: center;
}

.judge-ans-holder {
  margin-bottom: 15px;
  text-align: center;
}
</style>
