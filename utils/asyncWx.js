Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getSetting = function() {
    return new Promise(function(o, n) {
        wx.getSetting({
            success: function(n) {
                o(n);
            },
            fail: function(o) {
                n(o);
            }
        });
    });
}, exports.chooseAddress = function() {
    return new Promise(function(o, n) {
        wx.chooseAddress({
            success: function(n) {
                o(n);
            },
            fail: function(o) {
                n(o);
            }
        });
    });
}, exports.openSetting = function() {
    return new Promise(function(o, n) {
        wx.openSetting({
            success: function(n) {
                o(n);
            },
            fail: function(o) {
                n(o);
            }
        });
    });
}, exports.wxLogin = function() {
    return new Promise(function(o, n) {
        wx.login({
            timeout: 1e4,
            success: function(n) {
                o(n);
            },
            fail: function(o) {
                n(o);
            }
        });
    });
}, exports.getImageStting = function(o) {
    return new Promise(function(n, t) {
        o ? (wx.showLoading({
            title: "保存中",
            mask: !0
        }), wx.getSetting({
            success: function(i) {
                wx.downloadFile({
                    url: o,
                    success: function(o) {
                        console.log(o);
                        var i = o.tempFilePath;
                        wx.saveImageToPhotosAlbum({
                            filePath: i,
                            success: function(o) {
                                wx.hideLoading(), wx.showToast({
                                    title: "保存成功",
                                    icon: "success",
                                    duration: 1500
                                }), n(o);
                            },
                            fail: function(o) {
                                wx.hideLoading(), wx.showToast({
                                    title: "保存失败",
                                    icon: "error",
                                    duration: 1500
                                }), t(o);
                            }
                        });
                    },
                    fail: function(o) {
                        wx.hideLoading(), wx.showToast({
                            title: "保存失败",
                            icon: "error",
                            duration: 1500
                        });
                    }
                });
            },
            fail: function(o) {}
        })) : (wx.showLoading({
            title: "请稍等",
            mask: !0
        }), setTimeout(function() {
            wx.hideLoading();
        }, 1e3));
    });
}, exports.getVideoStting = function(o, n) {
    return new Promise(function(n, t) {
        o ? (wx.showLoading({
            title: "保存中",
            mask: !0
        }), wx.getSetting({
            success: function(i) {
                wx.downloadFile({
                    url: o,
                    success: function(o) {
                        if (console.log(o), o.dataLength > 0) {
                            var i = o.tempFilePath;
                            wx.saveVideoToPhotosAlbum({
                                filePath: i,
                                success: function(o) {
                                    wx.hideLoading(), wx.showToast({
                                        title: "保存成功",
                                        icon: "success",
                                        duration: 1500
                                    }), n(o);
                                },
                                fail: function(o) {
                                    wx.hideLoading(), wx.showToast({
                                        title: "保存失败",
                                        icon: "error",
                                        duration: 1500
                                    }), t(o);
                                }
                            });
                        } else wx.hideLoading(), wx.showToast({
                            title: "保存失败",
                            icon: "error",
                            duration: 1500
                        });
                    },
                    fail: function(o) {
                        wx.hideLoading(), wx.showToast({
                            title: "保存失败",
                            icon: "error",
                            duration: 1500
                        });
                    }
                }).onProgressUpdate(function(o) {
                    n(o);
                });
            },
            fail: function(o) {}
        })) : (wx.showLoading({
            title: "请稍等",
            mask: !0
        }), setTimeout(function() {
            wx.hideLoading();
        }, 1e3));
    });
};