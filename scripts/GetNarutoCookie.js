/**
 * 手动签到一次自动获取Cookie
 * 获取的Cookie供自动签到脚本使用
 * 代码参考 https://github.com/chavyleung/scripts/tree/master/bilibili
 *
 */
const cookieName = 'narutoCookie'
const cookieKey = 'cookie_naruto'
const xugd = init()
const cookieVal = $request.headers['Cookie']
if (cookieVal) {
    if (xugd.setdata(cookieVal, cookieKey)) {
        xugd.msg(`${cookieName}`, '火影获取Cookie: 成功', '')
        xugd.log(`[${cookieName}] 获取Cookie: 成功, cookie: ${cookieVal}`)
    }
}
function init() {
    isSurge = () => {
        return undefined === this.$httpClient ? false : true
    }
    isQuanX = () => {
        return undefined === this.$task ? false : true
    }
    getdata = (key) => {
        if (isSurge()) return $persistentStore.read(key)
        if (isQuanX()) return $prefs.valueForKey(key)
    }
    setdata = (key, val) => {
        if (isSurge()) return $persistentStore.write(key, val)
        if (isQuanX()) return $prefs.setValueForKey(key, val)
    }
    msg = (title, subtitle, body) => {
        if (isSurge()) $notification.post(title, subtitle, body)
        if (isQuanX()) $notify(title, subtitle, body)
    }
    log = (message) => console.log(message)
    get = (url, cb) => {
        if (isSurge()) {
            $httpClient.get(url, cb)
        }
        if (isQuanX()) {
            url.method = 'GET'
            $task.fetch(url).then((resp) => cb(null, {}, resp.body))
        }
    }
    post = (url, cb) => {
        if (isSurge()) {
            $httpClient.post(url, cb)
        }
        if (isQuanX()) {
            url.method = 'POST'
            $task.fetch(url).then((resp) => cb(null, {}, resp.body))
        }
    }
    done = (value = {}) => {
        $done(value)
    }
    return { isSurge, isQuanX, msg, log, getdata, setdata, get, post, done }
}
xugd.done()