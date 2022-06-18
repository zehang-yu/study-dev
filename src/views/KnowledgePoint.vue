<template>
  <div>
    <Tree :data="kps"></Tree>
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
        console.log(data.data.kps);
        this.kps = data.data.kps;
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style lang="scss" scoped></style>
