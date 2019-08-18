/*******************************全局vue项目配置文件****************************
 *1.该文件是在服务器启动时被加载 
 *2.
*/

const path = require('path');//导入nodeJS path模块
const resolve = dir => {//定义解析路径函数，用于拼接路径
  return path.join(__dirname, dir);
}

module.exports = {
    configureWebpack: {
		devtool: 'source-map'
	},
    chainWebpack:config => {//设置“@”符号的路径的映射
	    config.resolve.alias
	      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
	      .set('_c', resolve('src/components'))
    },
    devServer:{//配置服务器
        host:"localhost",
        port:"8005",
        proxy:{//配置代理服务器
            '/api':{//请求路径需要包含的路径
              target: 'http://localhost:8081',//目标代理服务器
              pathRewrite: {'^/api':''}, // 路径重写  用 " " 替换 "/api" 
              changeOrigin:true//创建虚拟代理服务器
            }
        }
    }
}
