Component({
    properties: {
        account: {
            type: String,
            value: "账号"
        },
        name: {
            type: String,
            value: "名称"
        }
    },
    data: {
        isShow: !1,
        fail: function() {},
        success: function() {}
    },
    methods: {
        show: function(i) {
            var t = i.isShow, s = void 0 === t || t, a = i.account, c = void 0 === a ? "账号" : a, n = i.name, o = void 0 === n ? "名称" : n, e = i.fail, u = void 0 === e ? null : e, l = i.success, h = void 0 === l ? null : l;
            this.setData({
                isShow: s,
                account: c,
                name: o,
                fail: u,
                success: h
            });
        },
        _cancelClick: function() {
            this.setData({
                isShow: !1
            }), this.data.fail();
        },
        _confirmClick: function() {
            this.setData({
                isShow: !1
            }), this.data.success();
        }
    }
});