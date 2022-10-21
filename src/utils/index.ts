import { getCurrentInstance, AppConfig } from 'vue';
import { get_env } from '@/config';
/**
 * @description 设置html的显示title
 * @param title 设置title的string
 */
export function setDocumentTitle(title: string): void {
    try {
        const document = window.document;
        document.title = title;
        const ifr = document.createElement('iframe');
        ifr.addEventListener('load', function () {
            setTimeout(() => {
                ifr.remove();
            });
        });
        document.body.appendChild(ifr);
        // vite 会引起两次 reload
        // if (/ip(hone|od|ad)/i.test(navigator.userAgent)) {
        //     const i = document.createElement('iframe');
        //     i.src = '/replace_title';
        //     i.style.display = 'none';
        //     i.onload = () => {
        //         setTimeout(() => {
        //             i.remove();
        //         }, 9);
        //     };
        //     document.body.appendChild(i);
        // }
    } catch (err) {}
}

/**
 * @description 获取 挂载vue实例中的gloabl属性
 * @returns AppConfig['globalProperties']
 */
export function get_global(): AppConfig['globalProperties'] {
    const instance = getCurrentInstance();
    let _this = {};
    if (instance) {
        _this = instance.appContext.config.globalProperties;
    }
    return _this;
}

/**
 * @description: 取#前后的参数
 * @param {String | undefined} paramName 参数名
 * @returns string
 */
export function getSearch(paramName: string | undefined) {
    const hash = decodeURIComponent(location.hash);
    const search = decodeURIComponent(location.search);
    let queryStr = search.substr(1); // search参数
    if (hash.split('?')[1]) queryStr += '&' + hash.split('?')[1]; // +query参数
    const query: any = {};
    queryStr &&
        queryStr.split('&').forEach(item => {
            const tmp = item.split('=');
            query[tmp[0]] = tmp[1];
        }); // 拼接全部路由参数
    return paramName ? query[paramName] : query;
}

/**
 * @description 获取当前环境下px对应的rem值
 * ! 只针对当前项目的750px的设计
 * @param {*} pxNum
 * @returns rem
 */
export function px2rem(pxNum: number | string) {
    if (typeof pxNum === 'string') {
        pxNum = parseInt(pxNum);
    }
    return `${pxNum / 75}rem`;
}

/**
 * @description 判断当前是否为安卓
 * @returns boolen
 */
export function isAndroid() {
    const u = navigator.userAgent;
    return u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
}

/**
 * @description:获取时间
 * @param date： 时间对象
 * @param cell： 单位
 * @example 2021年11月07日   2021/11/07
 */
export function getFormatDate(date: Date, cell = ['年', '月', '日']) {
    const year = date.getFullYear();
    let month: number | string = date.getMonth() + 1;
    let strDate: number | string = date.getDate();
    if (month >= 1 && month <= 9) {
        month = '0' + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate;
    }
    const currentdate = `${year}${cell[0] || ''}${month}${cell[1] || ''}${strDate}${cell[2] || ''}`;
    return currentdate;
}

/**
 * @description 格式化时间戳
 * @param {Date} date
 * @param {String} fmt
 * @returns {String}
 */

export function formatDate(date = new Date(), fmt = 'yyyy-MM-dd hh:mm:ss') {
    date = transformDate(date);

    const o: ANY_OBJ = {
        'M+': date.getMonth() + 1, // 月份
        'd+': date.getDate(), // 日
        'h+': date.getHours(), // 小时
        'm+': date.getMinutes(), // 分
        's+': date.getSeconds(), // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    };

    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));

    for (const k in o) {
        if (new RegExp('(' + k + ')').test(fmt))
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
    }

    return fmt;
}

/**
 * @param {Date,String,Number} date
 * @returns {Date}
 */

export function transformDate(date: Date | string | number) {
    if (date instanceof Date) return date;
    if (typeof date === 'number' && !isNaN(date)) date = Number(date);

    try {
        return new Date(date);
    } catch (err) {}

    return new Date();
}

/**
 * @description 首字母大写
 * @param {String} str
 * @returns {String}
 */

export function capitalize(str: string) {
    return `${str.charAt(0).toUpperCase()}${str.substring(1)}`;
}

/**
 * @description 获取url query
 * @export
 * @param {*} getQuery
 * @returns
 */
export function getQuery(key: string) {
    const reg = new RegExp(`(^|&)${key}=([^&]*)(&|$)`, 'i');
    const r = window.location.search.substr(1).match(reg);
    return r ? unescape(r[2]) : null;
}
/** 是否是dev环境  */
export function is_dev() {
    return get_env('dev') || false;
}

/** *
 * @description 秒转换为 x小时x分钟x秒
 * @param time {number}  秒数
 * @returns {string} x小时x分钟x秒
 */
export function seconds2stringtime(time: number | string) {
    if (typeof time === 'string') time = parseInt(time);
    if (time >= 60 && time <= 3600) {
        time = Math.floor(time / 60) + '分' + (time % 60) + '秒';
    } else {
        if (time > 3600) {
            time = Math.floor(time / 3600) + '小时' + Math.floor((time % 3600) / 60) + '分' + (time % 60) + '秒';
        } else {
            time = time + '秒';
        }
    }
    return time;
}

/**
 * 去除空格
 * @param {String} value
 * @returns {String}
 */

export function trim(value: string) {
    return value.replace(/\s/g, '');
}
/**
 * 是否为微信环境
 * @returns boolen
 */
export function isWeiXin(): boolean {
    return navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1;
}
// 是否为移动端
export const isMobile = () => {
    const plat = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    );
    return plat ? true : false;
};
// 是否为PC端
export const isPC = () => !isMobile();

// host name
export type I_HOST_NAME = 'pc' | 'mobile';
export const hostName: () => I_HOST_NAME = () => (isMobile() ? 'mobile' : 'pc');
