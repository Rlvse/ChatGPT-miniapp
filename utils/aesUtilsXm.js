!function() {
    function e(e, n, t) {
        return n = r.enc.Utf8.parse(n), t = r.enc.Utf8.parse(t), r.AES.encrypt(e, n, {
            iv: t,
            mode: r.mode.CBC,
            padding: r.pad.Pkcs7
        }).toString();
    }
    var r = require("./aes.js"), n = "2019022020190220";
    module.exports = function(r) {
        var t = e(JSON.stringify(r), "3d2ac549c78d45ed", n);
        return {
            params: t = e(t, "1e9c0f206d9e3b73", n)
        };
    };
}();