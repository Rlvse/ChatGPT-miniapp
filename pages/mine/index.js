! function() {
	function e(e) {
		return function() {
			var n = e.apply(this, arguments);
			return new Promise(function(e, t) {
				return function r(o, u) {
					try {
						var a = n[o](u),
							s = a.value;
					} catch (e) {
						return void t(e);
					}
					if (!a.done) return Promise.resolve(s).then(function(e) {
						r("next", e);
					}, function(e) {
						r("throw", e);
					});
					e(s);
				}("next");
			});
		};
	}
	var n = require("../../request/mine.js"),
		t = function(e) {
			return e && e.__esModule ? e : {
				default: e
			};
		}(require("../../lib/runtime/runtime")),
		r = require("../../utils/base64");
	Page({
		data: {
			userInfo: {},
			userKey: null,
			hasUserInfo: !1,
			canIUseGetUserProfile: !1,
			soul: {}
		},
		onLoad: function(e) {
			this.getSoul();
			var n = wx.getStorageSync("userInfo");

			if (n) {
				console.log("有用户信息");
				n && this.setData({
					userInfo: n,
					hasUserInfo: !0
				}), wx.getUserProfile && this.setData({
					canIUseGetUserProfile: !0
				});
			} else {
				console.log("没有用户信息");
				this.setData({
					userInfo: null,
					hasUserInfo: !1
				})
			}
		},
		onReady: function() {},
		onShow: function() {
			var key = wx.getStorageSync("userKey");
			if (key) {
				console.log("有用户KEY");
				this.setData({
					userKey: key
				})
			} else {
				this.setData({
					userKey: null
				})
			}
		},
		onHide: function() {},
		onUnload: function() {},
		onPullDownRefresh: function() {},
		onReachBottom: function() {},
		onShareAppMessage: function() {
			return {
				title: "快来体验好玩又实用的万用生成器",
				path: "pages/mine/index",
				imageUrl: "/img/logo.png"
			};
		},
		onShareTimeline: function() {
			return {
				title: "快来体验好玩又实用的万用生成器"
			};
		},
		handleProblemPage: function() {
			wx.navigateTo({
				url: "/pages/problem/index"
			});
		},
		handleAboutPage: function() {
			wx.navigateTo({
				url: "/pages/about/index"
			});
		},
		showPic: function() {
			wx.previewImage({
				// TODO
				urls: ["https://multigen.qingbuqing.cn/img/qrcode.jpg"]
			});
		},

		getProfile(e) { //点击授权登录时产生的监听事件
			var t = this // 定义 变量 t var 可以定义全局变量 let 定义局部变量
			console.log('获取头像昵称', e) // console.log 打印输出
			wx.getUserProfile({ //获取用户信息。页面产生点击事件（例如 button 上 bindtap 的回调中）后才可调用，每次请求都会弹出授权窗口，用户同意后返回 userInfo,用于替换 wx.getUserInfo
				lang: 'zh_CN', //显示用户信息的语言
				desc: '用于在后台更好的识别您的身份', //声明获取用户个人信息后的用途
				success(res) { //接口调用成功的回调函数
					console.log('获取', res)
					wx.setStorageSync('userInfo', res
					.userInfo); // userInfo 本地缓存指定的 key  res.userInfo 需要存储的数据
					// wx.setStorageSync('userInfo', res.userInfo); 第一个参数为本地缓存指定的 key 
					// 第二个参数为 res.userInfo 为要需要存储的数据信息 这里要把 res.userInfo 获取到的用户信息列表，存储在userInfo 列表里面
					t.setData({ //对 userInfo 进行数据更改，赋值
							userInfo: res.userInfo, //把获取到的数据列表赋值给 userInfo 改变里面的数据
							avatarUrl: res.userInfo.avatarUrl //把头像地址赋值给 avatarUrl
						}),
						wx.switchTab({ //跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面 就是首页  
							//用户授权成功后就要跳转到首页导航栏
							url: "/pages/mine/index",
						}); // 进入到首页后，出现消息提示窗，提示用户:'欢迎使用本小程序'的提示语
					t.onLoad()

					wx.showToast({ //显示消息提示框
						// image: "/static/image/success.png", //自定义图标的本地路径，image 的优先级高于 icon
						icon: "success", //显示成功图标，此时 title 文本最多显示 7 个汉字长度
						title: '授权成功',
						duration: 1000, //提示的延迟时间 为1s 1000ms=1s
					});
				},
				fail(err) { //接口调用失败的回调函数 用户拒绝授权登录后，出现的提示窗
					console.error(err) //打印输出错误数据
					console.error("123")
					wx.showToast({ // 拒绝登录 显示消息提示框 
						// image: "/static/image/error.png",
						title: '用户拒绝授权', // 提示用户：'用户拒绝授权'
						icon: "error",
						duration: 1000 // 提示语出现时间延迟1s
					});
				}
			})
		},

		logout: function() {
			wx.removeStorageSync('userInfo');
			wx.removeStorageSync('userKey');
			console.log("移除userInfo及userKey");
			wx.showToast({ //显示消息提示框
				icon: "success", //显示成功图标，此时 title 文本最多显示 7 个汉字长度
				title: '退出成功',
				duration: 1000, //提示的延迟时间 为1s 1000ms=1s
			});
			wx.switchTab({ //跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面 就是首页
				//用户授权成功后就要跳转到首页导航栏
				url: "/pages/mine/index",
			}); // 进入到首页后，出现消息提示窗，提示用户:'欢迎使用本小程序'的提示语
			this.onLoad()
		},

		getSoul: function() {
			var r = this;
			return e(t.default.mark(function e() {
				var o;
				return t.default.wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							return e.next = 2, (0, n.request)({
								url: "/tools/soul",
								method: "post"
							});

						case 2:
							null != (o = e.sent) && r.setData({
								soul: o
							});

						case 4:
						case "end":
							return e.stop();
					}
				}, e, r);
			}))();
		},
		handleSupportPage: function() {
			wx.navigateToMiniProgram({
				appId: "wxeb39b10e39bf6b54",
				path: "zhihu/answer?utm_campaign=shareopn&id=1914851630&utm_medium=social&utm_content=group2_myAnswer&utm_source=wechat_session&utm_oi=866227422922702848"
			});
		}
	});
}();
