
cc.Class({
    extends: cc.Component,

    properties: {
        DamageText: {
            default:null,
            type:cc.Prefab,
        },
    },

    onLoad() {
        this.Pool = new cc.NodePool();
        let initCount = 5;
        for (let i = 0; i < initCount; i++) {
            let DamageDisplayer = cc.instantiate(this.DamageText); // create node instance
            DamageDisplayer.active = false;
            this.Pool.put(DamageDisplayer); // populate your pool with putInPool method
        }
    },

    ShowDamage(DamageAmount,IsCrit) {
        let DamageDisplayer = null;
        if (this.Pool.size() > 0) 
        { 
            DamageDisplayer = this.Pool.get();
        } 
        else
        {
            DamageDisplayer = cc.instantiate(this.DamageText);
        }
        DamageDisplayer.color = cc.Color.WHITE;
        DamageDisplayer.active = true;
        DamageDisplayer.parent = this.node;
        if(IsCrit)
        {
            DamageDisplayer.color = cc.Color.RED;
            DamageDisplayer.getComponent(cc.Label).string = DamageAmount + "!";
        }
        else
        {
            DamageDisplayer.getComponent(cc.Label).string = DamageAmount;
        }
        DamageDisplayer.getComponent(cc.Animation).play("FloatDamage");
    },

    start () {
    },


     update (dt) {

     },
});
