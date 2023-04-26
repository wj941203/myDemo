<template>
  <div>
    hahahha.... <span>{{ msg }}</span>
    <test :massage="msg" @toparent="getcount"></test>
  </div>
</template>

<script>
import test from "./test";
export default {
  // name: "text",
  created() {
    // this.getcount();
  },
  data() {
    return {
      msg: "terrrrrt",
    };
  },
  components: { test },
  methods: {
    getcount(info) {
      console.log("this is info====>",info);
      this.msg = info
    },
  },
};
</script>

<style lang="">
</style>