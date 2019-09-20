const userMap = new Map();
const url = require("url");
const userDao = require('../dao/user');
function logon(request,resposn) {
  request.on('data',function (data) {
    const temp = JSON.parse(data.toString());
    temp.userName && temp.password &&
    userDao.logon(temp.userName,temp.password,function (res) {
      resposn.writeHead(200);
      resposn.write("注册成功");
      resposn.end();
    },function (rej){
      resposn.writeHead(200);
      resposn.write("用户名已经注册，请直接登陆");
      resposn.end();
    })
  })
}
userMap.set("logon",logon);

function login(request,resposn) {
  request.on('data',function (data) {
    const temp = JSON.parse(data.toString())
    temp.userName && temp.password &&
    userDao.login(temp.userName,function (res) {
      try {
        let pwd = JSON.parse(JSON.stringify(res));
        if(temp.password == pwd[0].password){
          resposn.writeHead(200);
        }else{
          resposn.writeHead(404);
        }
        console.log(pwd[0].password)
      }catch (e) {
        console.error(e)
        resposn.writeHead(503);
      }
      resposn.end();
    },function () {
      console.log("fail")
      resposn.writeHead(404);
      resposn.end();
    })
  })
}
userMap.set("login",login);


module.exports = userMap;