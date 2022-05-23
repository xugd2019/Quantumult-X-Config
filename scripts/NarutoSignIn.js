/**
 * 火影忍者手游公众号签绑有礼自动签到
 * 自用脚本
 * 测试中
 * 随缘维护
 * 需要自己抓包拿Cookie
 */

const url = "https://gw.gzh.qq.com/awp-signin/register?id=15";
const method = "POST";
const headers = {"Accept": "*/*",
	          "Accept-Encoding": "gzip, deflate, br",
	          "Accept-Language": "zh-CN,zh-Hans;q=0.9",
	          "Connection": "keep-alive",
	          "Content-Type": "application/x-www-form-urlencoded",
	          "Cookie": "fsza_sk_s_at_wxa817069bb040f860=1653236791; fsza_sk_t_at_wxa817069bb040f860=ab5a703b0654646b11a77646e7ac3b4451688d0636e0dfef6b3e470938516d8d; pgv_pvid=5712510688; RK=R1uBFlyBZg; lskey=000100006790cab76fe28588106e86c249811ce9c70dd35f91479b38c4fa9189d85e0ec762bc77b58e6ac08c; luin=o1152885547; ptcz=faf1d46a68779974ff86f764d16a77b0089dc4ef8fc958d89998851ebb5030fa; eas_sid=K106G5E226N463W4W1b8B8d150; fsza_sk_s_q_101482157=1651771880; fsza_sk_s_q_at_101482157=1651771880; fsza_sk_t_q_101482157=01G2AMDD3DABECXWTZW2VQ3V2W; fsza_sk_t_q_at_101482157=01G2AMDD3DABECXWTZW2VQ3V2W",
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
