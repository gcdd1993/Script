/*
***************************
QuantumultX:

[rewrite_local]
^https?:\/\/gw-app\.beantechyun\.com\/app-api\/api\/v1.0\/vehicle\/getVehicleService url script-response-body https://raw.githubusercontent.com/gcdd1993/Script/master/QuantumultX/File/hfzj.js

[mitm]
hostname = gw-app.beantechyun.com

**************************/
let body = $response.body;
const obj = JSON.parse(body);
obj.data.forEach(item => {
    item.state = 1
})

body = JSON.stringify(obj);
console.log(body)
$done({body});
