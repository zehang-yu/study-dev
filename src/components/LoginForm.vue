<template>
  <form class="login-form">
    <div class="login-form-item">
      <label class="form-item-label">账号</label>
      <input
        class="form-item-input"
        v-model="account"
        placeholder="请输入账号"
      />
    </div>
    <div class="login-form-item">
      <label class="form-item-label">密码</label>
      <input
        class="form-item-input"
        v-model="password"
        type="password"
        placeholder="请输入密码"
      />
    </div>
    <div class="login-form-item">
      <el-radio-group v-model="radio">
        <el-radio label="student">学生</el-radio>
        <el-radio label="teacher">老师</el-radio>
      </el-radio-group>
      <div class="login-form-button" @click="handleLogin()">登录</div>
    </div>
  </form>
</template>
<script>
import { login } from "@/request/api";
export default {
  name: "LoginForm",

  data() {
    return {
      account: "",
      password: "",
      radio: "",
    };
  },

  methods: {
    handleLogin() {
      if (this.account === "" || this.password === "") {
        alert("用户名或密码为空");
        return;
      }
      if (this.radio === "") {
        alert("请选择登录的用户类型");
        return;
      }
      login({ account: this.account, password: this.password }, this.radio)
        .then((result) => {
          console.log(result);
          if (result.success == false) {
            alert("用户名或密码错误");
          } else {
            localStorage.setItem(
              "userInfo",
              JSON.stringify({
                type: this.radio,
                userId: result.data.User.id,
                name: result.data.User.name,
              })
            );
            this.$router.push("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style lang="less" scoped>
.login-form {
  .login-form-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 14px;
    width: 100%;
    .form-item-label {
      line-height: 36px;
      height: 36px;
      font-size: 14px;
      color: #868e96;
    }
    .form-item-input {
      width: 100%;
      outline: none;
      border: solid 1px #dee2e6;
      border-radius: 4px;
      background: #f8f9fa;
      height: 36px;
      padding: 0 16px;
      font-size: 14px;
    }

    .login-form-button {
      cursor: pointer;
      margin-top: 14px;
      text-align: center;
      width: 100%;
      background: #5c7cfa;
      padding: 0 16px;
      height: 40px;
      line-height: 40px;
      border-radius: 4px;
      color: #fff;
      &:active {
        background-color: #4343fe;
      }
    }
  }
}
</style>
