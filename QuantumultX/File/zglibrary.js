/*
***************************
QuantumultX:

[rewrite_local]
^https?:\/\/api\.zglibrary\.com\/vip\/status url script-response-body https://raw.githubusercontent.com/gcdd1993/Script/master/QuantumultX/File/zglibrary.js

[mitm]
hostname = api.zglibrary.com

**************************/
let body = $response.body;
const obj = JSON.parse(body);

obj.data = {
    ...obj.data,
    "surplusDays": 999,
    "isExpire": 0,
    "isVip": 1
}

body = JSON.stringify(obj);
console.log(body)
$done({body});