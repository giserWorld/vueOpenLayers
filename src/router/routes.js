//*****************vue-router组件路由配置-路由映射*****************

import openlayers from '@/views/openlayers/index.vue';

//路由映射
const routes = [
    { path: '/', redirect: '/openlayers' },//重定向
    // { path: '/index', component: HelloWorld, name: 'HelloWorld',},//首页
    { path: '/openlayers', component:openlayers, name:'openlayers'},//openlayers
]
export default routes;//暴露出去