<template>
  <div>
    <div v-for="item in questions" :key="item.id">
      <TestItem :question="item"></TestItem>
    </div>
  </div>
</template>

<script>
import api from "@/request/network";
import TestItem from "@/components/TestItem.vue";
export default {
  components: { TestItem },
  data() {
    return {
      questions: [],
      id: 0,
    };
  },
  created() {
    //console.log("hehe sb");
    for (var i = 1; i <= this.questions; i++) {
      console.log(i);
    }
    api
      .get(`/test/getQuestion`)
      .then((data) => {
        console.log(data);
        this.questions = data.data.testInfo;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {},
};
</script>
