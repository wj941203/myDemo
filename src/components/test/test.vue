<template>
  <div>
    mog.....{{ mog }}.......
    <br />
   mag..... {{ mag }}
    <br />
   msg.... {{massage}}
    <br>
    <button @click="change">点我</button>
    <button @click="chang">点我</button>
    <button @click="toparent">点我</button>
  </div>
</template>

<script>
export default {
  name: "test",
  // props: {
  //   massage: {
  //     type: String,
  //     required: true,
  //   },
  // },
  props: ["massage"],
  data() {
    return {
      mog: "test",
      mag: "test111",
    };
  },
  methods: {
    change() {
      // console.log('this====>',this);
      console.log("this===>", this.massage);
      this.mog = this.massage;
    },
    chang() {
      console.log(this);
      this.$nextTick(function(){
        this.mag=111
      })
    },
    toparent(){
      console.log("this is mag====>",this.mag)
      this.$emit("toparent",this.mag)
    }
  },
  computed: {},
};
</script>

<style lang="">
</style>