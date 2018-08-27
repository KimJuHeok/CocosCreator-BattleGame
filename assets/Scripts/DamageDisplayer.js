

cc.Class({
    extends: cc.Component,

    properties: {
    },
    onLoad() {
        this.Pool_fromParent = this.node.parent.getComponent("DamageManager").Pool;
        this.anim = this.getComponent(cc.Animation);
    },
    EndAnim:function() {
        this.node.active = false;
        this.Pool_fromParent.put(this.node);
    }

    // update (dt) {},
});
