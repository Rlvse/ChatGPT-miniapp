!function() {
    function e(e, c, d) {
        return c = a.enc.Utf8.parse(c), d = a.enc.Utf8.parse(d), a.AES.encrypt(e, c, {
            iv: d,
            mode: a.mode.CBC,
            padding: a.pad.Pkcs7
        }).toString();
    }
    var a = require("./aes.js"), c = "0102030405060708";
    module.exports = function(a) {
        var d = e(JSON.stringify(a), "0CoJUm6Qyw8W8jud", c);
        return {
            params: d = e(d, "TA3YiYCfY2dDJQgg", c),
            encSecKey: "84ca47bca10bad09a6b04c5c927ef077d9b9f1e37098aa3eac6ea70eb59df0aa28b691b7e75e4f1f9831754919ea784c8f74fbfadf2898b0be17849fd656060162857830e241aba44991601f137624094c114ea8d17bce815b0cd4e5b8e2fbaba978c6d1d14dc3d1faf852bdd28818031ccdaaa13a6018e1024e2aae98844210"
        };
    };
}();