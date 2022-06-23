<template>
  <div class="manage-test-kp-view">
    <h2>知识点测试管理界面</h2>
    <div class="tags">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="测验列表" name="questionList"></el-tab-pane>
        <el-tab-pane label="添加试题" name="addingQuestion"></el-tab-pane>
      </el-tabs>
    </div>

    <template v-if="activeName === 'questionList'">
      <KnowledgePointTestList></KnowledgePointTestList>
    </template>

    <AddKnowledgePointTestForm v-else></AddKnowledgePointTestForm>
  </div>
</template>

<script>
// @ is an alias to /src
import AddKnowledgePointTestForm from "@/components/AddKnowledgePointTestForm.vue";
import KnowledgePointTestList from "@/components/KnowledgePointTestList.vue";

export default {
  //name: "KnowledgePointTestManageView",
  data() {
    return {
      activeName: "questionList",
    };
  },
  methods: {
    handleClick() {
      console.log(this.activeName);
    },
  },
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

.tags {
  width: 700px;
  margin: 0 auto;
  padding-bottom: 20px;
}
</style>
