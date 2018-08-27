

cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.Character = this.node.parent.getComponent("CharacterBase");
        this.ProgressBar = this.getComponent(cc.ProgressBar);
        this.HPOrigin = this.Character.HP;
        this.HPCurrent = 0;


    },
    UpdateHealthBar() {
        this.HPCurrent = this.Character.HP;
        var HPPercent = this.HPCurrent/this.HPOrigin * 100;
        this.ProgressBar.progress = HPPercent/100;
    },


    update (dt) {
    },
});
