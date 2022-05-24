/**
 * 验证1
 */

const url = "https://apps.gzh.qq.com/common/wx/api/thirdpartySign.php?sAppid=wxa817069bb040f860&sUrl=https%3A%2F%2Fgzhcos.qq.com%2Fawp-activity%2Fcommon%2F%3FADTAG%3Dhyrz.15&callback=__jp0";
const method = "GET";
const headers = {
"Cookie" : $prefs.valueForKey("cookie_naruto"),
"Accept" : "*/*",
"Connection' : "keep-alive",
"Referer" : "https://gzhcos.qq.com/",
"Accept-Encoding" : "gzip, deflate, br",
"Host" : "apps.gzh.qq.com",
"User-Agent" : "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.22(0x18001624) NetType/WIFI Language/zh_CN",
"Accept-Language" : "zh-CN,zh-Hans;q=0.9"
};
const body = "";

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
