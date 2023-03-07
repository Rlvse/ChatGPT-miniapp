!function() {
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        }
        return e;
    }, t = 0;
    exports.request = function(n) {
        var o = !1;
        n.loading && (o = n.loading);
        var r = e({}, n.header);
        return r["Content-Type"] = "application/x-www-form-urlencoded", t++, o || wx.showLoading({
            title: "加载中",
            mask: !0
        }), new Promise(function(a, i) {
            wx.request(e({}, n, {
                header: r,
                url: "https://s30.app1112118708.qqopenapp.com" + n.url,
                success: function(e) {
                    a(e.data.data);
                },
                fail: function(e) {
                    i(e);
                },
                complete: function() {
                    0 != --t || o || wx.hideLoading();
                }
            }));
        });
    };
}();