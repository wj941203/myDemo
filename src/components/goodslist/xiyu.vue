<template>
  <div>
    <router-link to="/home/newslist">
      <h3>xiyu</h3>
    </router-link>
    <h2 @click="getmore">点我</h2>
  </div>
</template>
<script>
export default {
  name: "xiyu",
  data() {
    return {
      newList: []
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      // this.$http.get(`http://vue.studyit.io/api/getnewslist`).then(res=>{

      // })
      // console.log(1111111);
    },
    getmore() {
      console.log(this);
      this.$router.replace({ path: `/home/${this._uid }`});
      console.log(this._uid)
    }
  }
};
</script>