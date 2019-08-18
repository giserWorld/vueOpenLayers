//*****************vue-router组件路由配置-路由实例化*****************
import Vue from 'vue';//导入Vue模块
import VueRouter from 'vue-router';//官方提供的路由器插件
Vue.use(VueRouter);// Vue类安装官方扩展插件

import routes from './routes';//导入路由
const router = new VueRouter({//路由器实例
    routes,// (缩写) 相当于 routes: routes
    mode: 'history',
});
export default router;//通过ES6模块机制
