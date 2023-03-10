const app = getApp();
Page({
	data: {
		content: '',
		textP: '',
		messages: []
	},
	onPullDownRefresh () {
	},
	onLoad: function(options) {

	},
	onUnload () {

	},
	
	handleTextInput: function (event) {
	      console.log("get input")
	      console.log(event.detail.value)
		  this.setData({
		  	textP: event.detail.value
		  })
	  },
	
	createTextMessage() {
		console.log("this.data.textP");
		let text = this.data.textP;
		console.log(text);
		this.sendMessage(text);
		this.setData({
			content: ''
		});
	},

	sendMessage(message){
		console.log('发送.', message);
		
		let self = this;
		
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
		
		if(message == null || message.trim().length == 0){
			wx.showToast({
			    title: "请先输入",
			    icon: "error"
			})
			return;
		}
		
		
		let messages = this.data.messages;
		messages.length = 0;
		messages.push({
			"text": message,
			"role": "q"
		})
		messages.push({
			"text": "🧠飞速运转中，请稍等...",
			"role": "a"
		})
		this.setData({
			messages: messages
		})		
		console.log('问题.', self.data.messages);
		
		wx.request({
		    url: 'https://multigen.qingbuqing.cn/Api/chat',
			method: 'POST',
			data: {
					"scene": "chat",
					"u": userKey,
					"text": this.data.textP
				},
		    success: (result) => {
				if(result.data.code == 0){
					var that = this;
					let messages = this.data.messages;
					setTimeout(function () {
					    	messages.pop()
					    	messages.push({
					    		"text": "访问人数较多，请稍后重试",
					    		"role": "a"
					    	})
					    	that.setData({
					    		messages: messages
					    	})	
					    },5000)
					return;
				}else{
					let data =  result.data.data;
					let messages = this.data.messages;
				
					console.log('接收结果.', data);
					if(data.indexOf("error") != -1 || data.indexOf("443") != -1 || data.indexOf("curl") != -1){
						console.log('curl错误.');
						var that = this;
						setTimeout(function () {
								// let messages = this.data.messages;
								messages.pop()
								messages.push({
									"text": "访问人数较多，请稍后重试",
									"role": "a"
								})
								that.setData({
									messages: messages
								})	
							},5000)
						return;
					}
					
					messages.pop()
					messages.push({
						"text": data,
						"role": "a"
					})
					this.setData({
						textP: "",
						messages: messages
					})		
					console.log('当前msg.', this.data.messages);
				}
		    },fail: (result)=>{
				console.log('发送失败:',error);
				let messages = this.data.messages;
				var that = this;
				setTimeout(function () {
						// let messages = this.data.messages;
						messages.pop()
						messages.push({
							"text": "访问人数较多，请稍后重试",
							"role": "a"
						})
						that.setData({
							messages: messages
						})	
					},5000)
			}
		})
	},

	setContent:function(e) {
		// 监听输入的消息
		let content = e.detail.value;
		console.log("content:"+content);
		this.setData({
			textP: content
		});
	},

    scrollToBottom() { // 滑动到最底部
        setTimeout(() => {
            wx.pageScrollTo({
                scrollTop : 200000,
                duration :10
            });
        },600)
    }
})
