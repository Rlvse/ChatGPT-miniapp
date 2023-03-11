! function() {
	function e(e, o, t) {
		return o in e ? Object.defineProperty(e, o, {
			value: t,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[o] = t, e;
	}

	function o(e) {
		return function() {
			var o = e.apply(this, arguments);
			return new Promise(function(e, t) {
				return function n(i, a) {
					try {
						var r = o[i](a),
							s = r.value;
					} catch (e) {
						return void t(e);
					}
					if (!r.done) return Promise.resolve(s).then(function(e) {
						n("next", e);
					}, function(e) {
						n("throw", e);
					});
					e(s);
				}("next");
			});
		};
	}
	
	var t, n = require("../../request/server.js"),
		i = function(e) {
			return e && e.__esModule ? e : {
				default: e
			};
		}(require("../../lib/runtime/runtime")),
		a = (require("../../utils/asyncWx.js"),
			require("../../utils/base64")),
		r = require("../../utils/aesUtilsXm.js");
	Page((e(t = {
			data: {
				ellipsis: true,
				jobIndex: null,
				jobs: ['工程师', '人事', '行政', '运营', '其他（输入）'],
				job: "",
				wordIndex: 1,
				words: ['50', '100', '200', '500'],
				text: null,
				result: "",

				type: null,
				typeIndex: 0,
				types: ['日报', '周报'],

				videoObj: {},
				videoInfos: [],
				videoInfo: {},
				isVideoDown: !1,
				videoProgress: 0,
				isImageDown: !1,
				imageProgress: 0
			},
			reward: function() {
				// TODO
				wx.previewImage({
					current: "https://takeaway.qingbuqing.cn/static/img/icon.jpg",
					urls: ["https://takeaway.qingbuqing.cn/static/img/icon.jpg"]
				});
			},
			// waimai: function(e) {
			//     wx.navigateTo({
			//         url: "/pagesA/waimai/index"
			//     });
			// },
			onLoad: function(e) {
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
			onReady: function() {},
			onShow: function() {},
			onHide: function() {},
			onUnload: function() {},
			onPullDownRefresh: function() {},
			onReachBottom: function() {},
			onShareAppMessage: function() {
				return {
					title: "快来生成你的日报/周报",
					path: "pages/ribaozhoubao/index",
					imageUrl: "/icons/fx.jpg"
				};
			},
			onShareTimeline: function() {
				return {
					title: "快来生成你的日报/周报"
				};
			}
		}, "onShareAppMessage", function() {}), e(t, "adLoad", function() {
			console.log("日报周报生成成功");
		}), e(t, "adError", function(e) {
			console.log("日报周报生成失败", e);
		}),

		e(t, "bindJobPicker", function(e) {
			console.log('bindJobPicker发送选择改变，携带值为', e.detail.value)
			this.setData({
				jobIndex: e.detail.value
			})
			console.log('jobIndex值为', this.data.jobIndex)
		}),

		e(t, "bindTypePicker", function(e) {
			console.log('bindTypePicker发送选择改变，携带值为', e.detail.value)
			this.setData({
				typeIndex: e.detail.value
			})
		}),

		e(t, "bindWordPicker", function(e) {
			console.log('bindWordPicker发送选择改变，携带值为', e.detail.value)
			this.setData({
				wordIndex: e.detail.value
			})
		}),

		e(t, "adClose", function() {
			console.log("日报周报生成关闭");
		}), e(t, "onHelpPage", function() {
			wx.navigateTo({
				url: "/pages/ribaozhoubao/help"
			});
		}), e(t, "handleTextInput", function(e) {
			this.setData({
				text: e.detail.value
			});
		}), e(t, "handleJobInput", function(e) {
			this.setData({
				job: e.detail.value
			});
		}), e(t, "handleCleanText", function() {
			this.setData({
				text: null
			});
		}), e(t, "handleCleanJob", function() {
			this.setData({
				job: ""
			});
		}), e(t, "copy", function() {
			console.log("复制");
			wx.setClipboardData({
				data: this.data.result,
				success: function() {
					wx.hideLoading()
					wx.showToast({
						title: '复制成功',
					})
				}
			})
		}), e(t, "handlePares", function() {

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

			if (this.data.jobIndex == null) {
				console.log("null");
				wx.showToast({
					title: "请选择职业",
					icon: "error"
				})
				return;
			} else if (this.data.jobIndex == this.data.jobs.length - 1 && (this.data.job == '' || this.data
					.job.trim().length == 0)) {
				 wx.showToast({
					title: "请输入职业",
					icon: "error"
				})
				return;
			}

			var e = this;
			return o(i.default.mark(function o() {
				var t, a, s, u, c;
				return i.default.wrap(function(o) {
					for (;;) switch (o.prev = o.next) {
						case 0:
							console.log(0);
							if (t = e.data.text) {
								o.next = 4;
								break;
							}

							case 4:
								console.log(4);
								return a = r({
									url: t
								}), o.next = 8, (0, n.request)({
									url: "/Api/do",
									data: {
										"scene": "ribaozhoubao",
										"text": e.data.text,
										"u": userKey,
										"job": e.data.job || e.data.jobs[e
											.data.jobIndex],
										"word": e.data.words[e.data
											.wordIndex],
										"type": e.data.typeIndex
									},
									method: "post"
								});

							case 8:
								console.log(8);
								if (s = o.sent) {
									console.log(12);
									o.next = 12;
									break;
								}
								 wx.showToast({
									title: "访问人数较多，请稍后重试",
									icon: "none"
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
									result: s
								});
								if (0 != (u = s.videoInfo).length) {
									o.next = 16;
									break;
								}
								 wx.showToast({
									title: "当前访问人数较多，请稍后重试多，请稍后重试",
									icon: "none"
								})
								return;

							case 16:
								console.log(16);
								c = {}, u.forEach(function(e) {
									e.defaultQuality && (c = e);
								}), e.setData({
									videoObj: s,
									videoInfos: u,
									videoInfo: c,
								});

							case 19:
								console.log(19);
							case "end":
								return o.stop();
					}
				}, o, e);
			}))();
		}), e(t, "handleSaveCover", function() {
			var e = this;
			return o(i.default.mark(function o() {
				var t, n, r;
				return i.default.wrap(function(o) {
					for (;;) switch (o.prev = o.next) {
						case 0:
							(t = e).data.isImageDown || (t.updateImageDown(!0), n =
								e.data.videoObj.videoCover,
								r = "https://kejikk.com/image/down?path=" + a
								.encode(n), wx.getSetting({
									success: function(e) {
										wx.downloadFile({
											url: r,
											success: function(
											e) {
												if (e
													.dataLength >
													0) {
													var o =
														e
														.tempFilePath;
													wx.saveImageToPhotosAlbum({
														filePath: o,
														success: function(
															e
															) {
															t.updateImageDown(
																	!
																	1
																	),
																wx
																.showToast({
																	title: "保存成功",
																	icon: "success",
																	duration: 1500
																});
														},
														fail: function(
															e
															) {
															t.updateImageDown(
																	!
																	1
																	),
																wx
																.showToast({
																	title: "保存失败",
																	icon: "error",
																	duration: 1500
																});
														}
													});
												} else t
													.updateImageDown(
														!1),
													wx
													.showToast({
														title: "保存失败",
														icon: "error",
														duration: 1500
													});
											},
											fail: function(e) {
												t.updateImageDown(
														!1),
													wx
													.showToast({
														title: "保存失败",
														icon: "error",
														duration: 1500
													});
											}
										}).onProgressUpdate(
											function(e) {
												t.updateImageProgress(
													e.progress);
											});
									},
									fail: function(e) {
										t.updateImageDown(!1), wx
											.showToast({
												title: "保存失败",
												icon: "error",
												duration: 1500
											});
									}
								}));

						case 2:
						case "end":
							return o.stop();
					}
				}, o, e);
			}))();
		}), e(t, "handleSaveVideo", function() {
			var e = this;
			return o(i.default.mark(function o() {
				var t, n, r;
				return i.default.wrap(function(o) {
					for (;;) switch (o.prev = o.next) {
						case 0:
							(t = e).data.isVideoDown || (t.updateVideoDown(!0), n =
								e.data.videoInfo.videoUrl,
								console.log(n), r =
								"https://kejikk.com/video/down?path=" + a
								.encode(n), wx.getSetting({
									success: function(e) {
										wx.downloadFile({
											url: r,
											success: function(
											e) {
												if (e
													.dataLength >
													0) {
													var o =
														e
														.tempFilePath;
													wx.saveVideoToPhotosAlbum({
														filePath: o,
														success: function(
															e
															) {
															t.updateVideoDown(
																	!
																	1
																	),
																wx
																.showToast({
																	title: "保存成功",
																	icon: "success",
																	duration: 1500
																});
														},
														fail: function(
															e
															) {
															console
																.log(
																	e
																	),
																t
																.updateVideoDown(
																	!
																	1
																	),
																wx
																.showToast({
																	title: "保存失败",
																	icon: "error",
																	duration: 1500
																});
														}
													});
												} else t
													.updateVideoDown(
														!1),
													wx
													.showToast({
														title: "保存失败",
														icon: "error",
														duration: 1500
													});
											},
											fail: function(e) {
												console.log(
														e),
													t
													.updateVideoDown(
														!1),
													wx
													.showToast({
														title: "保存失败",
														icon: "error",
														duration: 1500
													});
											}
										}).onProgressUpdate(
											function(e) {
												t.updateVideoProgress(
													e.progress);
											});
									},
									fail: function(e) {
										t.updateVideoDown(!1), wx
											.showToast({
												title: "保存失败",
												icon: "error",
												duration: 1500
											});
									}
								}));

						case 2:
						case "end":
							return o.stop();
					}
				}, o, e);
			}))();
		}), e(t, "updateVideoDown", function(e) {
			this.setData({
				videoProgress: 0,
				isVideoDown: e
			});
		}), e(t, "updateVideoProgress", function(e) {
			this.setData({
				videoProgress: e
			});
		}), e(t, "updateImageDown", function(e) {
			this.setData({
				imageProgress: 0,
				isImageDown: e
			});
		}), e(t, "updateImageProgress", function(e) {
			this.setData({
				imageProgress: e
			});
		}),t));
}();
