<!------------------------------index------------------------------------>
<template>
  <div class="wrap">
     <div id="mapDiv" ref="mapDiv"></div>
  </div>
</template>

<script>
import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import XYZ from 'ol/source/XYZ';
export default {
    name: 'index',
    data(){
        return {
            map: null
        };
    },
    mounted(){
        //创建地图视图
        var mapview=new View({
            center: [101.698, 25.38],
            projection:"EPSG:4326",//默认是3857（墨卡托）
            zoom:7
        });
        //创建地图
        var mymap=new Map({
            target:"mapDiv",//地图容器id
            view:mapview,//地图显示的 
        });
        //谷歌服务源
        var googleServer=new XYZ({
            url:"http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}",
        });
        //创建切片图层(底图)
        var tileLayer=new TileLayer({
            source:googleServer,//设置切片图层的来源
        });
        mymap.addLayer(tileLayer);
    }
}
</script>

<style scoped>

</style>
