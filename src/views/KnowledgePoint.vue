<template>
  <div>
    <Tree :data="kps" @on-node-click="clickTreeNode"></Tree>
  </div>
</template>

<script>
import Tree from "vue2-org-tree";
import api from "@/request/network";

export default {
  name: "KnowledgePoint",
  components: { Tree },
  data() {
    return {
      kps: {},
    };
  },
  created() {
    const chapter = this.$route.params["chapter"];
    api
      .get(`kp/get/${chapter}`)
      .then((data) => {
        this.kps = data.data.kps;
      })
      .catch((err) => console.log(err));
  },
  methods: {
    clickTreeNode(e, data) {
      console.log(data);
      if (data.children) {
        // 点击有儿子的节点没反应
        return;
      }
      // 点击知识点
      this.$router.push(`/kp/${data.kpId}`);
    },
  },
};
</script>

<style lang="scss" scoped></style>
