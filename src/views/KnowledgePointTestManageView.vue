<template>
  <div class="manage-test-kp-view">
    <h2>知识点测试管理界面</h2>
    <KnowledgePointTestList></KnowledgePointTestList>
    <AddKnowledgePointTestForm></AddKnowledgePointTestForm>
  </div>
</template>

<script>
// @ is an alias to /src
import AddKnowledgePointTestForm from "@/components/AddKnowledgePointTestForm.vue";
import KnowledgePointTestList from "@/components/KnowledgePointTestList.vue";

export default {
  //name: "KnowledgePointTestManageView",
  components: {
    AddKnowledgePointTestForm,
    KnowledgePointTestList,
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin-top: 0;
}

.manage-test-kp-view {
}
</style>
