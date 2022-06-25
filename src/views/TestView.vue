<template>
  <div>
    <div v-for="item in judgequestions" :key="item.id">
      <judgeItemVue :question="item"></judgeItemVue>
    </div>
    <div v-for="item in choicequestions" :key="item.id">
      <TestItem :question="item"></TestItem>
    </div>
  </div>
</template>

<script>
import api from "@/request/network";
import TestItem from "@/components/TestItem.vue";
import judgeItemVue from "@/components/judgeItem.vue";
export default {
  components: { TestItem, judgeItemVue },
  data() {
    return {
      choicequestions: [],
      judgequestions: [],
      id: 0,
    };
  },
  created() {
    //console.log("hehe sb");
    for (var i = 1; i <= this.choicequestions; i++) {
      console.log(i);
    }
    api
      .get(`/test/getQuestion`)
      .then((data) => {
        console.log(data);
        this.choicequestions = data.data.testInfo;
      })
      .catch((err) => {
        console.log(err);
      });
    api
      .get(`/judgeTest/get`)
      .then((data) => {
        console.log(data);
        this.judgequestions = data.data.judgeText;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {},
};
</script>
