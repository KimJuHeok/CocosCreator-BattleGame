

cc.Class({
    extends: cc.Component,

    properties: {
    },


    // onLoad () {},

    start () {

    },
    OnPVPClicked() {
        this.maskLayer = cc.find("Canvas/MaskLayer");
        this.maskLayer.active = true;
        this.maskLayer.color = cc.Color.BLACK;
        this.maskLayer.runAction(
            cc.sequence(
                cc.fadeIn(0.2),
                cc.callFunc(()=> {
                    cc.director.loadScene('Battle');
                })
            ));
    }

    // update (dt) {},
});
