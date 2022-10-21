// 设置html字号
function setRootFontSize() {
    // var dpr = window.devicePixelRatio || 1
    // var scale = 1 / dpr
    var scale = 1;
    var metaEl = document.createElement('meta');
    metaEl.setAttribute('name', 'viewport');
    metaEl.setAttribute(
        'content',
        'width=device-width, initial-scale=' +
            scale +
            ', maximum-scale=' +
            scale +
            ', minimum-scale=' +
            scale +
            ', user-scalable=no' +
            ', viewport-fit=cover'
    );
    document.querySelector('head').appendChild(metaEl);
    function setRootFZ() {
        var clientWidth = document.documentElement.clientWidth;
        var maxWidth = 768;
        if (clientWidth > maxWidth) {
            clientWidth = maxWidth;
        }
        var rem = clientWidth / 10;
        document.documentElement.style.maxWidth = maxWidth + 'px';
        document.documentElement.style.fontSize = rem + 'px';
    }
    setRootFZ();
    window.addEventListener('resize', setRootFZ);
}
// 禁止微信内置浏览器调整字体大小
function disableWechatSetFontSize() {
    if (typeof WeixinJSBridge == 'object' && typeof WeixinJSBridge.invoke == 'function') {
        handleFontSize();
    } else {
        if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', handleFontSize, false);
        } else if (document.attachEvent) {
            document.attachEvent('WeixinJSBridgeReady', handleFontSize);
            document.attachEvent('onWeixinJSBridgeReady', handleFontSize);
        }
    }
    function handleFontSize() {
        // 设置网页字体为默认大小
        WeixinJSBridge.invoke('setFontSizeCallback', {
            fontSize: 0,
        });
        // 重写设置网页字体大小的事件
        WeixinJSBridge.on('menu:setfont', function () {
            WeixinJSBridge.invoke('setFontSizeCallback', {
                fontSize: 0,
            });
        });
    }
}

export function init() {
    setRootFontSize();
    disableWechatSetFontSize();
}
