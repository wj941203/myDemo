import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// 首先引用模块**
import Goods from "@/components/goods"
import Cars from "@/components/cars"
import Discover from "@/components/discover"
import Mine from "@/components/mine"
import Xiyu from "@/components/goodslist/xiyu"
import News from "@/components/newslist/newslist"
import Tert from "@/components/test/tert"

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  },
  // 注册模块，挂载到目录
  {
    path: '/home',
    component: Goods,
  },
  {
    path: '/cars',
    component: Cars
  },
  {
    path: '/discover',
    component: Discover
  },
  {
    path: '/mine',
    component: Mine
    /**
     * 子组件运用
     * children: [
        {path: '/orders', component: Order, name: 'Order'}
      ]
     */
  },
  {
    path: '/home/xiyu',
    component: Xiyu
  },
  {
    path: '/home/newslist',
    component: News
  }, {
    path: '/home/tert',
    component: Tert,

  }

  ]
})
