/*
***************************
QuantumultX:

[rewrite_local]
^https?:\/\/gateway-lx\.internetofcity\.cn\/api\/spacecode\/spaceCodeRecord\/scanHealthCode url script-response-body https://raw.githubusercontent.com/gcdd1993/Script/master/QuantumultX/File/lxapp_scan.js

[mitm]
hostname = gateway-lx.internetofcity.cn

**************************/
let body = $response.body;
const obj = JSON.parse(body);

obj.data = {
    ...obj.data,
    "isControlled": false,
    "isYellow": false,
    "underEighteen": false,
    "info": null,
    "visitGraveVoList": null,
    "redType": null,
    "pcode": null
}

body = JSON.stringify(obj);
console.log(body)
$done({body});
