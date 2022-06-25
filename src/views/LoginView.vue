<template>
  <div class="login">
    <h1>Login</h1>
    <h4>请使用最新的数据库DDL。目前这个登录还没有连数据库，随便输入就行</h4>
    <LoginForm></LoginForm>
  </div>
</template>
<script>
import LoginForm from "@/components/LoginForm";
export default {
  name: "LoginView",
  components: {
    LoginForm: LoginForm,
  },
};
</script>
<style lang="less" scoped>
.login {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
