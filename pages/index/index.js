!function() {
    function n(n) {
        return function() {
            var t = n.apply(this, arguments);
            return new Promise(function(n, e) {
                return function o(r, u) {
                    try {
                        var a = t[r](u), i = a.value;
                    } catch (n) {
                        return void e(n);
                    }
                    if (!a.done) return Promise.resolve(i).then(function(n) {
                        o("next", n);
                    }, function(n) {
                        o("throw", n);
                    });
                    n(i);
                }("next");
            });
        };
    }
    var t = require("../../request/index.js"), e = function(n) {
        return n && n.__esModule ? n : {
            default: n
        };
    }(require("../../lib/runtime/runtime"));
    Page({
        data: {
            aa: [ {
                nickName: "万用生成器，一个好玩的效率神器"
            }, {
                nickName: "如果觉得好用的话，请分享给盆友哟！"
            }],
            banners: [],
            tools3: [],
            groupInfo: {}
        },
        gotogzh: function(n) {
            wx.navigateTo({
                url: "../group/add"
            });
        },
        onLoad: function(n) {
            this.checkSession(), this.getBannerInfos(), this.getToolInfos(), this.getGroupInfo();
        },
        onReady: function() {},
        onShow: function() {},
        onHide: function() {},
        onUnload: function() {},
        onPullDownRefresh: function() {},
        onReachBottom: function() {},
        interstitialAd: function(n) {
            function t() {
                return n.apply(this, arguments);
            }
            return t.toString = function() {
                return n.toString();
            }, t;
        }(function() {
            wx.createInterstitialAd && (interstitialAd = wx.createInterstitialAd({
                adUnitId: "adunit-4e164272962ed757"
            })), interstitialAd && interstitialAd.show().catch(function(n) {
                console.error(n);
            });
        }),
        onShareAppMessage: function() {
            return {
                title: "快来体验好玩又实用的万用生成器",
                path: "pages/index/index",
                imageUrl: "/img/logo.png"
            };
        },
        onShareTimeline: function() {
            return {
                title: "快来体验好玩又实用的万用生成器"
            };
        },
        adLoad: function() {
            console.log("Banner 广告加载成功");
        },
        adError: function(n) {
            console.log("Banner 广告加载失败", n);
        },
        adClose: function() {
            console.log("Banner 广告关闭");
        },
        getBannerInfos: function() {
            var o = this;
            return n(e.default.mark(function n() {
                var r;
                return e.default.wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
						// TODO
                        return n.next = 2, (0, t.request)({
                            url: ""
                        });

                      case 2:
                        (r = n.sent).push(""), o.setData({
                            banners: r
                        });

                      case 5:
                      case "end":
                        return n.stop();
                    }
                }, n, o);
            }))();
        },
        getToolInfos: function() {
            var o = this;
            return n(e.default.mark(function n() {
                var r;
                return e.default.wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
					  // TODO
                        return n.next = 2, (0, t.request)({
                            url: ""
                        });

                      case 2:
                        r = n.sent, o.setData({
                            tools3: r
                        });

                      case 4:
                      case "end":
                        return n.stop();
                    }
                }, n, o);
            }))();
        },
        getGroupInfo: function() {
            var o = this;
            return n(e.default.mark(function n() {
                var r;
                return e.default.wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return n.next = 2, (0, t.request)({
                            url: "/tools3/group_chat1.json"
                        });

                      case 2:
                        null != (r = n.sent) && (wx.setStorageSync("groupInfo", r), o.setData({
                            groupInfo: r
                        }));

                      case 4:
                      case "end":
                        return n.stop();
                    }
                }, n, o);
            }))();
        },
        toGroupChatAdd: function() {
            wx.navigateTo({
                url: this.data.groupInfo.groupPage
            });
        },
        checkSession: function() {
            wx.checkSession({
                success: function() {},
                fail: function() {
                    wx.setStorageSync("userKey", ""), wx.setStorageSync("userInfo", "");
                }
            });
        }
    });
}();