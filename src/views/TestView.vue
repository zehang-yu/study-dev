<template>
  <div>
    <TestItem name="HHHHH"></TestItem>
  </div>
</template>

<script>
import TestItem from "@/components/TestItem.vue";
//import api from "@/request/network";
export default {
  components: { TestItem },
  data() {
    return {
      radio: "1",
      op1: false,
      op2: false,
      op3: false,
      op4: false,
    };
  },
  methods: {
    init: function () {},
    test: function () {},
    // test: function () {
    //   api
    //     .get("test/getQuestion")
    //     .then((data) => {})
    //     .catch((err) => {});
    // },
    getTheOption: function () {},
    getTheQuestion: function () {},
  },
};
</script>
