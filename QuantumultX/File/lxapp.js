/*
***************************
QuantumultX:

[rewrite_local]
^https?:\/\/gateway-lx\.internetofcity\.cn\/nucleic-result\?method=checkReportList url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/wnyd.js

[mitm]
hostname = gateway-lx.internetofcity.cn

**************************/
var body = $response.body;
var obj = JSON.parse(body);

var ts = new Date().getTime() - 60 * 1000 * 60
obj.data[0]["checkResult"] = 1
obj.data[0]["samplingTime"] = ts
obj.data[0]["collectTime"] = ts

body = JSON.stringify(obj);
$done({body});
