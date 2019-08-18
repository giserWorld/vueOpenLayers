import Vue from 'vue'
import App from './App.vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import router from './router/index';//导入es6模块
import VueAMap from 'vue-amap';//导入高德地图组件


//初始化vue-amap
VueAMap.initAMapApiLoader({
  key: '62b4215d27b7dfa22e89d904545fdb49',// 高德的key
  // 初始化插件后,使用插件之前，必须先初始化
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 
           'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 
           'AMap.MapType', 'AMap.PolyEditor', 
           'AMap.CircleEditor','AMap.Geolocation'],
});

Vue.use(VueAMap);
Vue.use(iView);
new Vue({
  router,//将路由器挂载到根vue组件中
  render: h => h(App),
}).$mount('#app')
