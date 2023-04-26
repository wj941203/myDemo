<template>
  <div class="view">
    <div>son</div>
    <!-- <div v-for="item in infolist" :key=''>
      <h3>{{item.mag}}</h3>
      <h3>{{item.msg}}</h3>
      <h3>{{item.mog}}</h3>
    </div>-->
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
    >
      <div class="ball" v-show="ballful" disabled></div>
    </transition>
    <h3>12322</h3>
    <ul v-for="item in infolist" :key="item.id">
      <li>{{ item.org }}</li>
      <li>{{ item.id }}</li>
    </ul>
    <mt-button type="primary" @click="show">primary</mt-button>
    <mt-button type="danger" @click="add">primary</mt-button>
    <mt-button type="danger" @click="app">primary</mt-button>
    <div>
      <mt-button type="danger" @click="radom" v-show="isFul">-</mt-button>
      <input type="text" value="1" @change="numchange" ref="box" />
      <mt-button type="danger" @click="random">+</mt-button>
    </div>
  </div>
</template>
<script>
export default {
  // props: ["infolist"],
  // props: {
  //   infolist: {
  //     type: String,
  //     required: true,
  //   },
  // },
  props:["infolist"],
  created() {
    //   setInterval(() => {
    this.gods();
    //   }, 1000);
    console.log("hahah.......", this.infolist);
  },
  mounted() {
    this.numchange();
  },
  data() {
    return {
      id: Math.ceil(Math.random()),
      ballful: false,
      isFul: true,
    };
  },
  methods: {
    numchange() {
      console.log("========>", this.$refs.box.value);
    },
    random() {
      this.$refs.box.value++;
      this.numchange();

      if (this.$refs.box.value > 0) {
        this.isFul = true;
        this.$emit("toparent", parseInt(this.$refs.box.value));
      }
    },
    radom() {
      this.$refs.box.value--;
      this.$emit("toparent", parseInt(this.$refs.box.value));

      if (this.$refs.box.value == 0) {
        this.isFul = false;
      }
      this.numchange();
      // if(this.$refs.box.value===1){}
    },
    gods() {
      console.log("this is ....", this);
    },
    show() {
      this.$emit("tonews", this.id);
    },
    app() {
      this.ballful = !this.ballful;
    },
    add() {
      this.ballful = !this.ballful;
    },
    beforeEnter(el) {
      clearTimeout();

      el.style.transform = "translate(0,0)";
      el.style.backgroundColor = "green";
    },
    enter(el, done) {
      el.offsetWidth;
      el.style.transform = "translate(110px,500px)";
      el.style.transition = "all 1s cubic-bezier(.4,-0.1,1,.68)";
      done();
    },
    afterEnter(el) {
      // clearTimeout()
      setTimeout(() => {
        this.ballful = !this.ballful;
        console.log(++this.id);
      }, 1000);
    },
  },
};
</script>
<style lang="" scoped>
.view {
  width: 100%;
  height: 100%;
  margin-bottom: 30px;
  /* margin-top: 20px; */
  /* background-color: rgb(21, 223, 72); */
}
h3 {
  width: 100%;
  height: 20px;
  /* background-color: rgb(52, 16, 216); */
}
li {
  list-style: none;
}
.ball {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  /* background-color: rgb(232, 247, 21); */
  position: absolute;
  z-index: 99;
  top: 300px;
  left: 150px;
}
input {
  width: 50px;
  height: 30px;
  border: 1px solid rgb(18, 228, 35);
  border-radius: 10px;
  background-color: rgb(245, 26, 26);
  text-align: center;
}
</style>