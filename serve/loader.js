const path = require("path");
const fs = require('fs');
const pathMap = new Map();
const file = fs.readdirSync(path.join(__dirname,"api"));
file.forEach( ele => {
    const temp = require(path.join(__dirname,"api",ele));
    setMapFlag(temp);
});
function setMapFlag(temp){
    for([key,value] of temp){
        if ( pathMap.get(key) == null){
            pathMap.set(key,value);
        }else {
            throw new Error("url 未一一对应" + key);
        }
    }
}
module.exports = pathMap;