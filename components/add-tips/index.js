Component({
    properties: {
        name: {
            type: String,
            value: "测试"
        },
        duration: {
            type: Number,
            value: 10
        },
        delay: {
            type: Number,
            value: 2
        },
        logo: {
            type: String,
            value: "https://multigen.qingbuqing.cn/img/logo.png"
        },
        custom: {
            type: Boolean,
            value: !1
        }
    },
    lifetimes: {
        attached: function() {
            var t = this;
            if (!wx.getStorageSync("PLUG-ADD-MYAPP-KEY")) {
                var e = wx.getMenuButtonBoundingClientRect ? wx.getMenuButtonBoundingClientRect() : null, a = wx.getSystemInfoSync().screenWidth;
                this.setData({
                    navbarHeight: e.bottom,
                    arrowR: a - e.right + 3 * e.width / 4 - 5,
                    bodyR: a - e.right
                }), this.startTimer = setTimeout(function() {
                    t.setData({
                        SHOW_TOP: !0
                    });
                }, 1e3 * this.data.delay), this.duraTimer = setTimeout(function() {
                    t.shrink();
                }, 1e3 * (this.data.duration + this.data.delay));
            }
        },
        detached: function() {
            this.startTimer && clearTimeout(this.startTimer), this.duraTimer && clearTimeout(this.duraTimer);
        }
    },
    data: {
        SHOW_TOP: !1
    },
    methods: {
        hidden: function() {
            wx.setStorageSync("PLUG-ADD-MYAPP-KEY", !0), this.shrink();
        },
        shrink: function() {
            this.animate("#add-tips", [ {
                scale: [ 1, 1 ]
            }, {
                scale: [ 0, 0 ],
                ease: "ease",
                transformOrigin: "calc(600rpx - ".concat(this.data.arrowR, "px) 1%")
            } ], 500, function() {
                this.setData({
                    SHOW_TOP: !1
                });
            }.bind(this));
        }
    }
});