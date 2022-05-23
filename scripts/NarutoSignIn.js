/**
 * 火影忍者手游公众号签绑有礼自动签到
 * 自用脚本
 * 测试中
 * 随缘维护
 */

const url = "https://gw.gzh.qq.com/awp-signin/register?id=15";
const method = "POST";
const headers = {"Accept": "*/*",
	          "Accept-Encoding": "gzip, deflate, br",
	          "Accept-Language": "zh-CN,zh-Hans;q=0.9",
	          "Connection": "keep-alive",
	          "Content-Type": "application/x-www-form-urlencoded",
	          "Cookie": $prefs.valueForKey("cookie_naruto"),
	          "Host": "gw.gzh.qq.com",
	          "Origin": "https://gzhcos.qq.com",
	          "Referer": "https://gzhcos.qq.com/",
	          "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.22(0x18001623) NetType/WIFI Language/zh_CN"
};
const data = {};

const myRequest = {
    url: url,
    method: method, // Optional, default GET.
    headers: headers, // Optional.
    body: JSON.stringify(data) // Optional.
};

$task.fetch(myRequest).then(response => {
    // response.statusCode, response.headers, response.body
    console.log(response.body);
    $notify("Title", "Subtitle", response.body); // Success!
    $done();
}, reason => {
    // reason.error
    $notify("Title", "Subtitle", reason.error); // Error!
    $done();
});
