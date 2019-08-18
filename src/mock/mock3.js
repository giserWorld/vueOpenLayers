// 使用 Mock
var Mock = require('mockjs');//导入模块
var data = Mock.mock({
    "string|1-10": "★",//"★" 重复1-10次
    "string2|3": "★★",//"★ "重复3次
    "number|+1": 202,//初始值是202,自动+1
    "number2|1-100.1-10": 1,//生成一个小数，整数部分1-100,小数部分保留1-10位
    "boolean|1": true,//产生true、false概率为1/2
    "array|1": [ "AMD" ],//从数组中随机选取1个值
    "object|2": {//从对象中随机选取2个属性
        "310000": "上海市",
        "320000": "江苏省",
        "530000": "云南省"
    },
    "user":{
        name:"wxt"
    },
    "absolutePath": '@/number @/user/name',
})
// 输出结果
console.log(JSON.stringify(data, null, 4))