const userMap = new Map();
const url = require("url");
const userDao = require('../dao/user');
function logon(request,resposn) {
  request.on('data',function (data) {
    const temp = JSON.parse(data.toString())
    temp.userName && temp.password &&
    userDao.logon(temp.userName,temp.password,function (res) {
      console.log("注册成功");
      resposn.writeHead(200);
      resposn.write(res);
      resposn.end();
    })
  })
}
userMap.set("logon",logon)


module.exports = userMap;