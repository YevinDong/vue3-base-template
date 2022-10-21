const pxtorem = require('postcss-pxtorem');
const postImport = require('postcss-import');
const postUrl = require('postcss-url');
const autoprefixer = require('autoprefixer');

module.exports = ({ file }) => {
    // 项目设计稿为 750
    let remUnit = 75;
    if (file && file.dirname && file.dirname.indexOf('vant') > -1) {
        // vant 设计稿为 375
        remUnit = 37.5;
    }
    return {
        plugins: [
            autoprefixer(),
            postImport(),
            postUrl(),
            pxtorem({
                rootValue: remUnit,
                unitPrecision: 5,
                propList: ['*'],
                selectorBlackList: [/^html$/, 'DO-PX-'],
            }),
        ],
    };
};
