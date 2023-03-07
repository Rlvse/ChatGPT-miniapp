Component({
    properties: {
        adData: Object
    },
    attached: function() {
        this.setData({
            adID: this.dataset.id
        });
    },
    methods: {
        adLoad: function() {
            this.triggerEvent("adload");
        },
        clickAd: function() {
            this.triggerEvent("click");
        },
        navFail: function(t) {},
        close: function() {
            this.triggerEvent("close");
        }
    }
});