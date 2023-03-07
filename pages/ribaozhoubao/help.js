Page({
    data: {
        tutorials: [ {
            tutorialImage: "../../icons/tutorial-one.png",
            tutorialContent: "1、在视频APP中点击分享按钮，点击打开"
        }, {
            tutorialImage: "../../icons/tutorial-two.png",
            tutorialContent: "2、打开后找到复制链接，点击复制"
        }, {
            tutorialImage: "../../icons/tutorial-three.png",
            tutorialContent: "3、选择对应的平台或其它平台均可进行解析"
        }, {
            tutorialImage: "../../icons/tutorial-four.png",
            tutorialContent: "4、长按粘贴或输入视频链接，点击解析"
        }, {
            tutorialImage: "../../icons/tutorial-five.png",
            tutorialContent: "5、解析成功可保存封面及视频，有其它问题或解析失败请联系客服"
        } ]
    },
    onLoad: function(t) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: "这里可以免费短视频去水印保存",
            path: "pages/index/index",
            imageUrl: "/icons/fx.jpg"
        };
    },
    onShareTimeline: function() {
        return {
            title: "这里可以免费短视频去水印下载"
        };
    }
});