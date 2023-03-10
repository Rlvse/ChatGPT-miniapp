!(function () {
	function e(e, o, t) {
		return o in e
			? Object.defineProperty(e, o, {
				value: t,
				enumerable: !0,
				configurable: !0,
				writable: !0,
			})
			: e[o] = t, e;
	}

	function o(e) {
		return function () {
			const o = e.apply(this, arguments);
			return new Promise((e, t) => {
				return (function n(i, a) {
					try {
						var r = o[i](a);
						var
							s = r.value;
					} catch (e) {
						return void t(e);
					}
					if (!r.done) {
						return Promise.resolve(s).then((e) => {
							n('next', e);
						}, (e) => {
							n('throw', e);
						});
					}
					e(s);
				})('next');
			});
		};
	}
	let t;
	const n = require('../../request/server.js');
	const i = (function (e) {
		return e && e.__esModule
			? e
			: {
				default: e,
			};
	})(require('../../lib/runtime/runtime'));
	const a = (require('../../utils/asyncWx.js'),
		require('../../utils/base64'));
	const
		r = require('../../utils/aesUtilsXm.js');
	Page((e(t = {
			data: {

				text: null,
				result: '',

				object: null,
				objectIndex: 0,
				objects: ['对象', '老板', '朋友', '单位'],

				reason: null,
				reasonIndex: 0,
				reasons: ['帮你想', '生病', '培训', '看牙', '装修', '搬家', '结婚'],

				videoObj: {},
				videoInfos: [],
				videoInfo: {},
				isVideoDown: !1,
				videoProgress: 0,
				isImageDown: !1,
				imageProgress: 0,
			},
			reward() {
				// TODO
				wx.previewImage({
					current: 'https://takeaway.qingbuqing.cn/static/img/icon.jpg',
					urls: ['https://takeaway.qingbuqing.cn/static/img/icon.jpg'],
				});
			},
			// waimai: function(e) {
			//     wx.navigateTo({
			//         url: "/pagesA/waimai/index"
			//     });
			// },
			onLoad(e) {
				var app = getApp();
				if (!app.globalData.isLogin) {
					console.log("需要先登录");
					// app.$http.get('/Api/getip', data).then(res =>{
					//      console.log("200");
					//      console.log(res.data);
					//     })
				} else {
					console.log("已登录可使用");
				}
			},
			onReady() {},
			onShow() {},
			onHide() {},
			onUnload() {},
			onPullDownRefresh() {},
			onReachBottom() {},
			onShareAppMessage() {
				return {
					title: '快来生成理由',
					path: 'pages/ribaozhoubao/index',
					imageUrl: '/icons/fx.jpg',
				};
			},
			onShareTimeline() {
				return {
					title: '快来生成理由',
				};
			},
		}, 'onShareAppMessage', () => {}), e(t, 'adLoad', () => {
			console.log('生成成功');
		}), e(t, 'adError', (e) => {
			console.log('生成失败', e);
		}),

		e(t, 'bindObjectPicker', function (e) {
			console.log('bindObjectPicker发送选择改变，携带值为', e.detail.value);
			this.setData({
				objectIndex: e.detail.value,
			});
		}),

		e(t, 'bindReasonPicker', function (e) {
			console.log('bindReasonPicker发送选择改变，携带值为', e.detail.value);
			this.setData({
				reasonIndex: e.detail.value,
			});
		}),

		e(t, 'adClose', () => {
			console.log('理由生成关闭');
		}), e(t, 'onHelpPage', () => {
			wx.navigateTo({
				url: '/pages/ribaozhoubao/help',
			});
		}), e(t, 'handleTextInput', function (e) {
			this.setData({
				text: e.detail.value,
			});
		}), e(t, 'handleJobInput', function (e) {
			this.setData({
				job: e.detail.value,
			});
		}), e(t, 'handleCleanText', function () {
			this.setData({
				text: null,
			});
		}), e(t, 'copy', function () {
			console.log('复制');
			wx.setClipboardData({
				data: this.data.result,
				success() {
					wx.hideLoading();
					wx.showToast({
						title: '复制成功',
					});
				},
			});
		}), e(t, 'handlePares', function () {
			
			const app = getApp()
			var userKey = wx.getStorageSync("userKey")
			if (!userKey) {
				console.log("需要登录");
				wx.showToast({
					title: '请先登录',
					icon: 'error',
					duration: 2000,
					//显示透明蒙层，防止触摸穿透
					mask: true,
					success: function() {
						setTimeout(function() {
							//要延时执行的代码
							wx.navigateTo({
								url: '/pages/login/index',
							})
						}, 500) //延迟时间
					}
				})
				return;
			}
			
			const e = this;
			return o(i.default.mark(function o() {
				let a;
				let c;
				let s;
				let t;
				let u;
				return i.default.wrap(function (o) {
					for (;;) {
						switch (o.prev = o.next) {
							case 0:
								console.log(0);
								if (t = e.data.text) {
									o.next = 4;
									break;
								}

								case 4:
									console.log(4);
									return a = r({
										url: t,
									}), o.next = 8, (0, n.request)({
										url: '/Api/do',
										data: {
											scene: 'liyou',
											u: userKey,
											reason: e.data.reasonIndex,
											object: e.data.objectIndex,
										},
										method: 'post',
									});

								case 8:
									console.log(8);
									if (s = o.sent) {
										console.log(12);
										o.next = 12;
										break;
									}
									wx.showToast({
										title: '访问人数较多，请稍后重试',
										icon: 'error',
									})
									return;

								case 12:
									console.log(12);
									// console.log(t); 空
									// console.log(a); {params: "aUV2LxWvwjnGfTv9J0rx96eVdFj42dW2Rj3TyZ2ZxmI="}
									console.log(s); // 123
									console.log(u); // undefined
									console.log(c); // undefined
									console.log(e); // 复杂东西
									this.setData({
										result: s,
									});
									if ((u = s.videoInfo).length != 0) {
										o.next = 16;
										break;
									}
									 wx.showToast({
										title: '当前访问人数较多，请稍后重试',
										icon: 'error',
									})
									return;

								case 16:
									console.log(16);
									c = {}, u.forEach((e) => {
										e.defaultQuality && (c = e);
									}), e.setData({
										videoObj: s,
										videoInfos: u,
										videoInfo: c,
									});

								case 19:
									console.log(19);
								case 'end':
									return o.stop();
						}
					}
				}, o, e);
			}))();
		}), e(t, 'handleSaveCover', function () {
			const e = this;
			return o(i.default.mark(function o() {
				let n;
				let r;
				let t;
				return i.default.wrap((o) => {
					for (;;) {
						switch (o.prev = o.next) {
							case 0:
								(t = e).data.isImageDown || (t.updateImageDown(!0),
									n = e.data.videoObj.videoCover,
									r =
									`https://kejikk.com/image/down?path=${a.encode(n)}`,
									wx.getSetting({
										success(e) {
											wx.downloadFile({
												url: r,
												success(e) {
													if (e
														.dataLength >
														0) {
														const o = e
															.tempFilePath;
														wx.saveImageToPhotosAlbum({
															filePath: o,
															success(
																e
															) {
																t.updateImageDown(
																		!1
																	),
																	wx
																	.showToast({
																		title: '保存成功',
																		icon: 'success',
																		duration: 1500,
																	});
															},
															fail(
																e
															) {
																t.updateImageDown(
																		!1
																	),
																	wx
																	.showToast({
																		title: '保存失败',
																		icon: 'error',
																		duration: 1500,
																	});
															},
														});
													} else {
														t.updateImageDown(
																!1
															),
															wx
															.showToast({
																title: '保存失败',
																icon: 'error',
																duration: 1500,
															});
													}
												},
												fail(e) {
													t.updateImageDown(
															!1
														), wx
														.showToast({
															title: '保存失败',
															icon: 'error',
															duration: 1500,
														});
												},
											}).onProgressUpdate((e) => {
												t.updateImageProgress(
													e.progress
												);
											});
										},
										fail(e) {
											t.updateImageDown(!1), wx
												.showToast({
													title: '保存失败',
													icon: 'error',
													duration: 1500,
												});
										},
									}));

							case 2:
							case 'end':
								return o.stop();
						}
					}
				}, o, e);
			}))();
		}), e(t, 'handleSaveVideo', function () {
			const e = this;
			return o(i.default.mark(function o() {
				let n;
				let r;
				let t;
				return i.default.wrap((o) => {
					for (;;) {
						switch (o.prev = o.next) {
							case 0:
								(t = e).data.isVideoDown || (t.updateVideoDown(!0),
									n = e.data.videoInfo.videoUrl,
									console.log(n), r =
									`https://kejikk.com/video/down?path=${a.encode(n)}`,
									wx.getSetting({
										success(e) {
											wx.downloadFile({
												url: r,
												success(e) {
													if (e
														.dataLength >
														0) {
														const o = e
															.tempFilePath;
														wx.saveVideoToPhotosAlbum({
															filePath: o,
															success(
																e
															) {
																t.updateVideoDown(
																		!1
																	),
																	wx
																	.showToast({
																		title: '保存成功',
																		icon: 'success',
																		duration: 1500,
																	});
															},
															fail(
																e
															) {
																console
																	.log(
																		e
																	),
																	t
																	.updateVideoDown(
																		!1
																	),
																	wx
																	.showToast({
																		title: '保存失败',
																		icon: 'error',
																		duration: 1500,
																	});
															},
														});
													} else {
														t.updateVideoDown(
																!1
															),
															wx
															.showToast({
																title: '保存失败',
																icon: 'error',
																duration: 1500,
															});
													}
												},
												fail(e) {
													console.log(e),
														t
														.updateVideoDown(
															!1
														), wx
														.showToast({
															title: '保存失败',
															icon: 'error',
															duration: 1500,
														});
												},
											}).onProgressUpdate((e) => {
												t.updateVideoProgress(
													e.progress
												);
											});
										},
										fail(e) {
											t.updateVideoDown(!1), wx
												.showToast({
													title: '保存失败',
													icon: 'error',
													duration: 1500,
												});
										},
									}));

							case 2:
							case 'end':
								return o.stop();
						}
					}
				}, o, e);
			}))();
		}), e(t, 'updateVideoDown', function (e) {
			this.setData({
				videoProgress: 0,
				isVideoDown: e,
			});
		}), e(t, 'updateVideoProgress', function (e) {
			this.setData({
				videoProgress: e,
			});
		}), e(t, 'updateImageDown', function (e) {
			this.setData({
				imageProgress: 0,
				isImageDown: e,
			});
		}), e(t, 'updateImageProgress', function (e) {
			this.setData({
				imageProgress: e,
			});
		}), t));
})();
