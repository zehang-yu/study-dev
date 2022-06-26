<template>
  <div class="add-test-kp-form">
    <h4>添加试题</h4>
    <div class="form-box">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="题目类型">
          <el-select v-model="form.questionType" placeholder="请选择题目类型">
            <el-option label="选择题" value="choice"></el-option>
            <el-option label="判断题" value="judge"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="题目内容">
          <el-input type="textarea" v-model="form.content"></el-input>
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
          <el-radio-group v-model="form.radio">
            <el-radio label="right">正确</el-radio>
            <el-radio label="wrong">错误</el-radio>
          </el-radio-group>
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
import { insertJudgeQuestion } from "@/request/api";
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
        radio: "",
      },
    };
  },

  methods: {
    onSubmit() {
      if (this.form.content === "") {
        alert("题目内容为空");
        return;
      }

      if (this.form.questionType == "choice") {
        //选择题
        let choiceAns = "";
        for (let i = 0; i < this.form.options.length; ++i) {
          if (this.form.options[i].delivery == true) {
            choiceAns = String.fromCharCode("A".charCodeAt(0) + i);
            break;
          }
        }

        if (choiceAns === "") {
          alert("未选择正确答案选项");
          return;
        }

        insertChoiceQuestion({
          title: this.form.content,
          opA: this.form.options[0].optionName,
          opB: this.form.options[1].optionName,
          opC: this.form.options[2].optionName,
          opD: this.form.options[3].optionName,
          ans: choiceAns,
        })
          .then((res) => {
            console.log(res);
            this.$message.success("添加成功");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        //判断题

        let judgeAns = "";
        if (this.form.radio == "") {
          alert("未选择正确答案");
        } else if (this.form.radio == "right") {
          judgeAns = "对";
        } else {
          judgeAns = "错";
        }

        insertJudgeQuestion({
          title: this.form.content,
          ans: judgeAns,
        })
          .then((res) => {
            this.$message.success("添加成功");
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>

<style scoped>
h4 {
  margin: 0;
  margin-bottom: 20px;
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
