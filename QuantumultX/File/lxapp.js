/*
***************************
QuantumultX:

[rewrite_local]
^https?:\/\/gateway-lx\.internetofcity\.cn\/nucleic-result\?method=checkReportList url script-response-body https://raw.githubusercontent.com/gcdd1993/Script/master/QuantumultX/File/lxapp.js

[mitm]
hostname = gateway-lx.internetofcity.cn

**************************/
var body = $response.body;
var obj = JSON.parse(body);

var ts = new Date().getTime() - 60 * 1000 * 60
obj.data[0]["checkResult"] = 1
obj.data[0]["samplingTime"] = ts
obj.data[0]["collectTime"] = ts
obj.data[0]["isInTimeRange"] = true
obj.data[0]["collectionBatchName"] = "地铁站"

body = JSON.stringify(obj);
console.log(body)
$done({body});
