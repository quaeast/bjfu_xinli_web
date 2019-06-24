
const path = require('path'); //系统路径模块
const app = express();

const hostName = '149.129.37.165'; //ip
const port = 8080; //端口

app.use(express.static(path.join(__dirname, '.'))); //指定静态文件目录

app.listen(port, hostName, function() {
  console.log(`服务器运行在http://${hostName}:${port}`);
});
const express = require('express'); //express框架模块
