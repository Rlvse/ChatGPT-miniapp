!function() {
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    }, t = 0;
    exports.request = function(n) {
        var r = !1;
        n.loading && (r = n.loading);
        var o = e({}, n.header);
        return o["Content-Type"] = "application/x-www-form-urlencoded", t++, r || wx.showLoading({
            title: "加载中",
            mask: !0
        }), new Promise(function(a, i) {
            wx.request(e({}, n, {
                header: o,
                url: "https://multigen.qingbuqing.cn" + n.url,
                success: function(e) {
                    a(e.data.data);
                },
                fail: function(e) {
                    i(e);
                },
                complete: function() {
                    0 != --t || r || wx.hideLoading();
                }
            }));
        });
    };
}();