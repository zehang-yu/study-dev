<template>
  <div>
    <TestItem name="HHHHH"></TestItem>
  </div>
</template>

<script>
import TestItem from "@/components/TestItem.vue";
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
    getTheOption: function () {},
    getTheQuestion: function () {},
  },
};
</script>
