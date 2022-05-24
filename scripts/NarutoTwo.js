
/**
 * 验证2
 * 
 */

const url = "https://app.ingame.qq.com/ingamego/trpc/user-data/get?site_id=5&login_type=commlogin&verify_type=wx_at&appid=wxa817069bb040f860";
const method = "GET";
const headers = {
"Origin" : "https://gzhcos.qq.com",
"Cookie" : "fsza_sk_s_q_101482157=1653409211; fsza_sk_s_q_at_101482157=1653409211; fsza_sk_t_q_101482157=01G3VDWS91VJQKWJ9STFQWJ1HY; fsza_sk_t_q_at_101482157=01G3VDWS91VJQKWJ9STFQWJ1HY; gzh_user_status=29cOxr5jOFgPOe1ACH2WPqv05IE; fsza_sk_s_at_wxa817069bb040f860=1653409155; fsza_sk_t_at_wxa817069bb040f860=0eb432559436a7dc0be8cb28ba83f3ecb874cd626f8e520efee58c9f5b5ff966",
"Connection" : "keep-alive",
"Accept" : "*/*",
"Referer" : "https://gzhcos.qq.com/",
"Host" : "app.ingame.qq.com",
"User-Agent" : "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.22(0x18001624) NetType/WIFI Language/zh_CN",
"Accept-Encoding" : "gzip, deflate, br",
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
