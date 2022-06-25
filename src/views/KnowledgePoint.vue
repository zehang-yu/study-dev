<template>
  <div>
    <div v-for="(chapter, idx) in chapters" :key="idx" >
      <Tree :data="chapter" @on-node-click="clickTreeNode" horizontal collapsable @on-expand="onExpand" @on-node-mouseover="mouseOver"></Tree>
      <br/>
    </div>
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
      chapters: [],
    };
  },
  created() {
    api
      .get(`kp/chapters`)
      .then((data) => {
        this.chapters = data.data.chapters;
      })
      .catch((err) => console.log(err));
  },
  methods: {
    clickTreeNode(e, data) {
      if (data.children) {
        // 点击有儿子的节点没反应
        return;
      }
      // 点击知识点
      this.$router.push(`/kp/${data.kpId}`);
    },
    onExpand(e, data) {
      if ("expand" in data) {
        data.expand = !data.expand;
      } else {
        this.$set(data, "expand", true);
      }
    },
    mouseOver(e, data) {
      if (!data.children) {
        // 鼠标悬浮到叶子节点
      }
    }
  },
};
</script>

<style lang="scss" scoped></style>
