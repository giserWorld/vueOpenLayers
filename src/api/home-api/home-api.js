import * as api from '../api';//将api.js文件中所有的export属性和方法导入到api对象中
//接口前缀
//const server_Url = 'http://192.168.167.229:8081/';//本地服务地址

//远程服务器基础接口路径
const server_Url = 'https://www.ynhrjm.com/server2';//远程地址



const BackendURL={
    getCarsInfoURL:server_Url + '/hr/gpsoo/getCars.ht',//获取所有的车数据
    numberBoardDataURL:server_Url + '/hr/index/getCarAndPersonNum.ht',
};
export default BackendURL;