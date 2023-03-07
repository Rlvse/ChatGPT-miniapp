// import $http from '/utils/request.js'
// $http,
App({
	onLaunch: function(n) {
		var t = this;
		wx.cloud.init({
			env: "uiunion-screenshot-168",
			traceUser: !0
		}), this.autoUpdate();
		var e = wx.getStorageSync("logs") || [];
		e.unshift(Date.now()), wx.setStorageSync("logs", e), wx.login({
			success: function(n) {}
		}), wx.getSetting({
			success: function(n) {
				n.authSetting["scope.userInfo"] && wx.getUserInfo({
					success: function(n) {
						t.globalData.userInfo = n.userInfo, t
							.userInfoReadyCallback && t.userInfoReadyCallback(n);
					}
				});
			}
		});

		this.checkIslogin()
	},
	
	autoUpdate: function() {
		var n = this;
		if (wx.canIUse("getUpdateManager")) {
			var t = wx.getUpdateManager();
			t.onCheckForUpdate(function(e) {
				e.hasUpdate && wx.showModal({
					title: "更新提示",
					content: "检查到新版本，是否下载新版本并重启小程序？",
					success: function(e) {
						e.confirm ? n.downloadAndUpdate(t) : e.cancel && wx.showModal({
							title: "温馨提示",
							content: "必须强制更新哦，旧版本无法正常使用",
							showCancel: !1,
							confirmText: "确定更新",
							success: function(e) {
								e.confirm && n.downloadAndUpdate(t);
							}
						});
					}
				});
			});
		} else wx.showModal({
			title: "提示",
			content: "当前微信版本过低，无法使用该功能，请升级后重试。"
		});
	},
	downloadAndUpdate: function(n) {
		wx.showLoading(), n.onUpdateReady(function() {
			wx.hideLoading(), n.applyUpdate();
		}), n.onUpdateFailed(function() {
			wx.showModal({
				title: "已经有新版了哦",
				content: "请你删除当前小程序，进行升级哦"
			});
		});
	},

	// 检测用户是否已经授权登录过， 登录过就获取用户信息
	checkIslogin(callback) {
		const openid = wx.getStorageSync('userKey')
		const _this = this
		if (!openid) {
			console.log("未登录");
			this.globalData.isLogin = false
		} else {
			console.log("已登录");
			this.globalData.isLogin = true
		}
	},


	globalData: {
		host: "https://multigen.qingbuqing.cn",
		Applist: "",
		bgColor: "",
		layers: []
	}
});
