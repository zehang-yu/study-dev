<template>
  <div id="app">
    <!--
    <nav>
      <router-link to="/test">Test</router-link> |
      <router-link to="/kps">知识点</router-link>|
      <br />
      <router-link to="/mamagekptest">KnowledgePointTestManage</router-link>|
      <router-link to="/award">Pointaward</router-link>|
    </nav>
    -->
    <div class="left-box">
      <el-col class="container-left" :span="12">
        <h4>选项菜单</h4>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="1" @click="toLink('/')">
            <span slot="title">Test</span>
          </el-menu-item>

          <el-menu-item index="2" @click="toLink('/kps')">
            <span slot="title">知识点</span>
          </el-menu-item>
          <el-menu-item index="3" @click="toLink('/mamagekptest')">
            <span slot="title">KnowledgePointTestManage </span>
          </el-menu-item>
          <el-menu-item index="4" @click="toLink('/award')">
            <span slot="title">Pointaward</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </div>

    <div class="container-right">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    toLink(url, param) {
      this.$router.push(url, param);
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
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
</style>
