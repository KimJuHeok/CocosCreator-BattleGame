

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

    },

     update (dt) {
         if( this.AllyComponent.HP < 0 )
         {
             this.maskLayer.active = true;
             this.WinnerLabel.getComponent(cc.Label).string = "Player 2!";
             FireBaseDB.ref("Player1").child("Text").set("Fail");
             cc.game.pause();
         }
         if( this.EnemyComponent.HP < 0 )
         {   
            this.maskLayer.active = true;
            this.WinnerLabel.getComponent(cc.Label).string = "Player 1!";
            FireBaseDB.ref("Player2").child("Text").set("Win");
            cc.game.pause();
         }
     },
});
