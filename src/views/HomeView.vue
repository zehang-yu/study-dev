<template>
  <div class="home-container">
    <!--
    <nav>
      <router-link to="/test">Test</router-link> |
      <router-link to="/kps" param>知识点</router-link>
      <br />
      <router-link to="/mamagekptest">KnowledgePointTestManage</router-link>|
      <router-link to="/award">Pointaward</router-link>|
    </nav>
    -->
    <template v-if="this.userType === 'student'">
      <!-- 学生界面 -->
      <div class="left-box">
        <div class="container-left">
          <h4>{{ userName }}同学</h4>
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-menu-item index="1" @click="toLink('/test')">
              <span slot="title">测试题</span>
            </el-menu-item>

            <el-menu-item index="2" @click="toLink('/kps')">
              <span slot="title">知识点</span>
            </el-menu-item>

            <el-menu-item index="3" @click="toLink('/teachermanage')">
              <span slot="title">知识点助教管理</span>
            </el-menu-item>
          </el-menu>
        </div>
      </div>
    </template>

    <div class="left-box" v-else>
      <!-- 老师界面 -->
      <div class="container-left">
        <h4>{{ userName }}老师</h4>
        <el-menu
          default-active="4"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="4" @click="toLink('/mamagekptest')">
            <span slot="title">试题管理 </span>
          </el-menu-item>
          <el-menu-item index="5" @click="toLink('/award')">
            <span slot="title">助教信息统计</span>
          </el-menu-item>
        </el-menu>
      </div>
    </div>

    <div class="container-right">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeView",
  
  data() {
    return {
      userName: "",
      userType: "",
    };
  },

  methods: {
    toLink(url, param) {
      this.$router.replace(url, param);
    },
    handleOpen() {},
    handleClose() {},
  },
  mounted() {
    // localstorage.get()
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (!userInfo) {
      this.$router.replace({ path: "/login" });
    } else {
      //登录成功
      console.log(userInfo.type);
      this.userType = userInfo.type;
      this.userName = userInfo.name;
      if (this.userType === "student") {
        //如果登陆的是学生
        this.$router.push({ path: "/test" });
      } else {
        this.$router.push({ path: "/mamagekptest" });
      }
    }
  },
};
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: row;
}
.container-left {
  width: 300px;
}
.container-right {
  flex: 1;
}
a {
  text-decoration: none;
  color: #000;
}
.router-link-active {
  text-decoration: none;
}
.left-box {
  height: 100%;
}
</style>
