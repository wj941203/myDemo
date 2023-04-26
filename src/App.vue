<template>
  <div id="app">
    <!-- header -->
    <mt-header fixed title="chilema "></mt-header>

    <!-- <mt-button type="primary" @click="show">primary</mt-button> -->
    <!-- <mt-button type="danger" @click="hide">primary</mt-button> -->
    <!-- header -->

    <!-- tbody -->
    <transition>
      <router-view />
    </transition>
    <!-- tbody -->

    <!-- footer -->
    <mt-tabbar ref="lala" fixed v-model="selected" value>
      <mt-tab-item id="外卖">
        <router-link to="/home">外卖</router-link>
      </mt-tab-item>
      <mt-tab-item id="订单">
        <router-link to="/cars">订单</router-link>
      </mt-tab-item>
      <mt-tab-item id="发现">
        <router-link to="/discover">发现</router-link>
      </mt-tab-item>
      <mt-tab-item id="我的">
        <router-link to="/mine">我的</router-link>
      </mt-tab-item>
    </mt-tabbar>
    <!-- footer -->
  </div>
</template>

<script>
  import {
    Toast
  } from "mint-ui";
  export default {
    name: "App",
    data() {
      return {
        gettoast: null,
        selected: null,
        uniApp: null
      };
    },
    methods: {
      hide() {
        let thst = this.$refs.lala.value;
        console.log(111);
      },
      getList() {
        this.show();
        setTimeout(() => {
          this.gettoast.close();
        }, 3000);
      },
      show() {
        this.gettoast = Toast({
          message: "lallal",
          position: "top",
          duration: 2000
        });
      }
    },
    created() {
      this.getList();
    },
    mounted() {

    },
    computed() {}
  };
</script>

<style>
  .mint-tabbar>.mint-tab-item.is-selected {
    background-color: #eaeaea;
    color: #26a2ff;
  }

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #46627e;
    margin-top: 60px;
    overflow-x: hidden;
  }

  .v-enter {
    opacity: 0;
    transform: translateX(100%);
  }

  .v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }

  .v-enter-active,
  .v-leave-active {
    transition: all 0.5s ease;
  }
</style>
