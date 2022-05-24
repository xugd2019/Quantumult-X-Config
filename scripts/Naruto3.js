
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://gw.gzh.qq.com/sidip/site/role/display?site=hyrz&login_type=wx`;
const method = `GET`;
const headers = {
'Origin' : `https://gzhcos.qq.com`,
'Cookie' : ,
'Connection' : `keep-alive`,
'Accept' : `*/*`,
'Referer' : `https://gzhcos.qq.com/`,
'Host' : `gw.gzh.qq.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.22(0x18001624) NetType/WIFI Language/zh_CN`,
'Accept-Encoding' : `gzip, deflate, br`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
