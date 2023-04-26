<template>
  <div class="view">
    <h3>father</h3>
    <h2>1{{info.mag.org}}</h2>
    <h2>2{{info.msg.org}}</h2>
    <h2>3{{info.mog.org}}</h2>
    <h1>{{id}}</h1>
    <h1 class="hei">{{ip}}</h1>
    <!-- <br style="height:10px"> -->
    <list :infolist="info" @tonews="copy" @toparent="getcount" ></list>

  </div>
</template>
<script>
import list from "./news";
// console.log('woshstorsge',localStorage.user)
window.localStorage.setItem("tokennnnn", localStorage.user);
export default {
  name: "newslist",
  data() {
    return {
      info: {
        mag: {
          org: "dadada",
          id: 1,
        },
        msg: {
          org: "eada",
          id: 2,
        },
        mog: {
          org: "fada",
          id: 3,
        },
      },
      id: 1,
      ip: 1,
    };
  },
  methods: {
    copy(e) {
      console.log("zhizujian ", e);
      this.info.mag.id = e;
      console.log('%%%%%',this.info.mag.id)
    },
    getcount(e) {
      this.id = e;
      console.log("this is ", this.$children[0]);
    },
  },
  components: { list },
  created() {
    // this.getcount();
    // console.log(infolist)
  },
  mounted() {},
};
</script>
<style lang="" scoped>
body {
  height: 100%;
  width: 100%;
  padding: 40px 0;
}
.view{
  background-color: rgb(48, 199, 236);

}
.hei{
  margin-bottom: 50px;
  background-color: #ccc;
}
</style>