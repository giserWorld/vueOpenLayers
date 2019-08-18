<!------------------------------index------------------------------------>
<template>
    <div class="wrap">
        <mapIndex></mapIndex>
    </div>
</template>

<script>
import mapIndex from '@/components/openlayers/index.vue';

export default {
    name: 'index',
    data(){
        return {
            name:"index"
        };
    },
    mounted(){
       
    },
    components:{//局部组件
        "mapIndex":mapIndex,
    },
    methods:{
        
    }
}
</script>

<style scoped>

</style>
