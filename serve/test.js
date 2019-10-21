var req = require("request");

var data = {
    username: 201810101600129,
    vrf: 18.01345381811113,
    password: 201810101600129
}
req({
    url: "http://jhc.sunnysport.org.cn/login/",
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify(data)
}, function(error, resp, body){
    if (error) {
        console.log(error);
    } else {
        console.log(body);
    }
});