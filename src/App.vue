<template>
   <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'app',
  data(){
   return{
     msg:"跟组件"
    }
  },
  components:{

  }
}
</script>
/****组件局部样式****/
<style lang="less" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 0px;
  margin: 0px;
  border: 0px solid black;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}
</style>
