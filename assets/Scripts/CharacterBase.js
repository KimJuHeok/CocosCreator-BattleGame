
cc.Class({
    extends: cc.Component,

    properties: {
        HP:150,
        ATKSpeed:3,
        ATKDmg:10,
        CritPer:10,
        CritDmg:110,
        IsAlly:true,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}


    start () {
        this.scheduleOnce(function() {
            
            this.CheckAllyOrNot();
            this.anim = this.getComponent(cc.Animation);
            this.animState = this.anim.getClips();
            this.animState[1].speed = this.ATKSpeed;
            this.schedule(function() {
                this.BasicAttack();
            }, 1/this.ATKSpeed);

        },3);

     },

     CheckAllyOrNot() {
        if(this.IsAlly)
        {
            this.Enemy = cc.find("Canvas/PlayerCharacter/Enemy/Character_Enemy");
            this.EnemyCharacter = this.Enemy.getComponent("CharacterBase");
            cc.log(this.EnemyCharacter);
        }
        else if(!this.IsAlly)
        {
            this.Enemy = cc.find("Canvas/PlayerCharacter/Ally/Character_Ally");
            this.EnemyCharacter = this.Enemy.getComponent("CharacterBase");
            cc.log(this.EnemyCharacter);
        }
        else
        {
            cc.log("couldn't find IsAlly");
        }

    },
    BasicAttack() {
        this.anim.play('Attack');
        this.EnemyCharacter.SetHP(this.EnemyCharacter.HP - 
            (this.ATKDmg + this.getRandom(-1,1) ));
        if(this.IsAlly)
        {
            cc.log("Allyattacked","EnemyHP",this.EnemyCharacter.HP);
        }
        else if(!this.IsAlly)
        {
            cc.log("Enemyattacked","AllyHP",this.EnemyCharacter.HP);
        }
    },
    getRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      },
    SetHP(value)
    {
        this.HP = value;
    },

    // update (dt) {},
});
