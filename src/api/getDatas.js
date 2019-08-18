import BACKUP from './home-api/home-api';//接口地址
import * as axios from './api';//配置的axios http请求的方法



//导入图片
import normal0 from '@/assets/imgs/cars/normal0.png';
import normal1 from '@/assets/imgs/cars/normal1.png';

import alarm0 from '@/assets/imgs/cars/alarm0.png';
import alarm1 from '@/assets/imgs/cars/alarm1.png';

import warning0 from '@/assets/imgs/cars/warning0.png';
import warning1 from '@/assets/imgs/cars/warning1.png';

//获取地图上所有车辆数据
export const getAllCarSJ=(callBack=function(){}) => {
    const data = {//传参
     
    }
    axios.get(BACKUP.getCarsInfoURL,data).then((data)=>{
        if (data.status === 200){//成功返回
            let mydata=data.data.data;

           //格式化数据
            mydata.forEach(function(item,idx){
                item.userid=item.userid;//用户id
                item.topWhenClick=true;//用户id
                item.visible=true;
                item.position=[item.jingdu, item.weidu];
                item.offset=[-7, -7];
                let sfkz= item.isEmpty;//是否空重状态
                let ztz=item.safeStatusValue;  // 状态值 1 =紧急 2 =预警 3= 普通 
                let dzml=item.dispatchStatus; //是否有调度命令'
                item.icon=getCarIcon(sfkz, ztz, dzml);
            });
            callBack(mydata);//改变数据结构后在返回数据
        }
    });
}

//根据不同的车辆状态获取图标
// a：0-重车 1-空车 2-不属于任何值运力单元
// b: 状态值 1 =紧急 2 =预警 3= 普通 
// c：调度命令  1.待领受 2.已领受  3.值乘 4.到达 5.开始作业 0 不属于任何调度命令
function getCarIcon(a, b, c) {
    if (a == 1) {
        if (b == 1) {
            return alarm0
        } else if (b == 2) {
            return warning0
        } else if (b == 3) {
            return normal0
        } 
        // return normal0;
    } 
    else {
        if (b == 1) {
            return alarm1
        } else if (b == 2) {
            return warning1
        } else if (b == 3) {
            return normal1
        } 
        // return normal1;
    }
}