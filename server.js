const express = require('express'); //express框架模块
const path = require('path'); //系统路径模块
const app = express();

const hostName = '192.168.31.128'; //ip
const port = 80; //端口

app.use(express.static(path.join(__dirname, '.'))); //指定静态文件目录

app.listen(port, function() {
    console.log(`服务器运行在http://${hostName}:${port}`);
});
