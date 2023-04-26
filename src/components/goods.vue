<template>
  <div>
    <h3>goods</h3>
    <!-- banner -->
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <!-- grids -->

    <ul class="ul">
      <router-link to="/home/xiyu" tag="li" @click="getBanner">
        <img src="../images/images/menu1.png" alt />
        <span>111</span>
      </router-link>
      <router-link to="/home/tert" tag="li">
        <img src="../images/images/menu2.png" alt />
        <span>222</span>
      </router-link>
      <router-link to="/home/xiyu" tag="li">
        <img src="../images/images/menu3.png" alt />
        <span>333</span>
      </router-link>
      <router-link to="/home/xiyu" tag="li">
        <img src="../images/images/menu4.png" alt />
        <span>444</span>
      </router-link>
      <router-link to="/home/xiyu" tag="li">
        <img src="../images/images/menu5.png" alt />
        <span>{{a+11}}</span>
      </router-link>
      <router-link to="/home/xiyu" tag="li">
        <img src="../images/images/menu6.png" alt />
        <span>{{ num }}</span>
      </router-link>

      <!-- <li>
        <router-link to>
          <img src="../images/images/menu2.png" alt />
          <span>222</span>
        </router-link>
      </li>
      <li>
        <router-link to>
          <img src="../images/images/menu3.png" alt />
          <span>333</span>
        </router-link>
      </li>
      <li>
        <router-link to>
          <img src="../images/images/menu4.png" alt />
          <span>444</span>
        </router-link>
      </li>
      <li>
        <router-link to>
          <img src="../images/images/menu5.png" alt />
          <span>555</span>
        </router-link>
      </li>
      <li>
        <router-link to>
          <img src="../images/images/menu6.png" alt />
          <span>666</span>
        </router-link>
      </li> -->
    </ul>
  </div>
</template>
<script>
import { Swiper, SwipeItem } from "mint-ui";
export default {
  name: "home",
  data() {
    return {
      id: this.$route.params.id,
      list: [],
      a: 1,
    };
  },
  computed: {
    num() {
      return this.a + 10;
    },
  },
  methods: {
    getBanner() {
       this.$http.get(`http://vue.studyit.io/api/getlunbo`).then(res=>{
         console.log(res.body)
       })
      console.log(this.id)
      // console.log(this.$route.params)
      this.$route.params=this.id
    },
  },
  created() {
    this.getBanner();
  },
};
</script>
<style lang="">
.mint-swipe {
  height: 100px;
}
.mint-swipe-item:nth-child(1) {
  background-color: rgb(29, 109, 201);
}
.mint-swipe-item:last-child {
  background-color: rgb(77, 9, 165);
}
.mint-swipe-item:nth-child(2) {
  background-color: green;
}
.ul li {
  list-style: none;
  width: 33.333%;
  height: 80px;
  /* margin-top: 20px; */
  text-align: center;
  /* line-height: 80px; */
  /* padding: 10px; */
}
.ul {
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  /* background-color: rgb(187, 181, 181); */
}
.ul li router-link {
  text-decoration: none;
}
.ul li img {
  width: 50%;
  height: 50%;
}
/* .router-link-exact-active, */
.router-link-active {
  text-decoration: none;
}
span {
  display: block;
  font-size: 10px;
}
</style>