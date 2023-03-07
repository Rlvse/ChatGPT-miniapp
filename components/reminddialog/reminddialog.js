Component({
    properties: {
        title: {
            type: String,
            value: "标题"
        },
        content: {
            type: String,
            value: "内容"
        },
        cancel: {
            type: String,
            value: "取消"
        },
        confirm: {
            type: String,
            value: "确认"
        }
    },
    data: {
        isShow: !1,
        fail: function() {},
        success: function() {}
    },
    methods: {
        show: function(t) {
            var i = t.isShow, s = void 0 === i || i, e = t.title, n = void 0 === e ? 标题 : e, c = t.content, o = void 0 === c ? "内容" : c, a = t.fail, l = void 0 === a ? null : a, u = t.success, h = void 0 === u ? null : u;
            this.setData({
                isShow: s,
                title: n,
                content: o,
                fail: l,
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