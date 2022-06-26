<template>
  <div class="login">
    <h2>登录</h2>
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
