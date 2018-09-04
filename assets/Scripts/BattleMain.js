

cc.Class({
    extends: cc.Component,

    properties: {
        Ally:{
            default:null,
            type:cc.Node,
        },
        Enemy:{
            default:null,
            type:cc.Node,
        },
        maskLayer:{
            default:null,
            type:cc.Node,
        },

    },



     onLoad () {


     },

    start () {
        this.AllyComponent = this.Ally.getComponent("CharacterBase");
        this.EnemyComponent = this.Enemy.getComponent("CharacterBase");
        this.WinnerLabel = this.maskLayer.getChildByName("WinnerLabel");
        g_FireBaseDB.ref("Result").on('value',snap => console.log(snap.val()));

    },

     update (dt) {
         if( this.AllyComponent.HP < 0 )
         {
             this.maskLayer.active = true;
             this.WinnerLabel.getComponent(cc.Label).string = "Player 2!";
             g_FireBaseDB.ref("Result").child("Text").set("zxcvasa");
             cc.game.pause();
         }
         if( this.EnemyComponent.HP < 0 )
         {   
            this.maskLayer.active = true;
            this.WinnerLabel.getComponent(cc.Label).string = "Player 1!";
            g_FireBaseDB.ref("Result").child("Text").set("xxasdfxb");
            cc.game.pause();
         }
     },
});
