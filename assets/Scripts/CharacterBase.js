
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
            this.HealthBar = this.node.getChildByName("HealthBar").getComponent("HealthBarScript");
            this.DamageManger = this.EnemyCharacter.node.getChildByName("DamageManager").getComponent("DamageManager");
            this.anim = this.getComponent(cc.Animation);
            this.animState = this.anim.play('Attack');
            this.animState.speed = this.ATKSpeed;
            //this.anim.setCurrentTime(this.ATKSpeed,'Attack');

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
        }
        else if(!this.IsAlly)
        {
            this.Enemy = cc.find("Canvas/PlayerCharacter/Ally/Character_Ally");
            this.EnemyCharacter = this.Enemy.getComponent("CharacterBase");
        }
        else
        {
            cc.log("couldn't find IsAlly");
        }

    },
    BasicAttack() {
         this.anim.play('Attack');
         this.GiveEnemyDamage((this.ATKDmg + this.getRandom(-1,1)));
        // if(this.IsAlly)
        // {
        //     cc.log("Allyattacked","EnemyHP",this.EnemyCharacter.HP);
        // }
        // else if(!this.IsAlly)
        // {
        //     cc.log("Enemyattacked","AllyHP",this.EnemyCharacter.HP);
        // }

    },
    getRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      },
    GiveEnemyDamage(Damage) {
        if(this.getRandom(1,100) <= this.CritPer)
        {
            // Crit 
            this.EnemyCharacter.SetHP(this.EnemyCharacter.HP - Damage * this.CritDmg/100);
            this.DamageManger.ShowDamage(Damage * this.CritDmg/100, true);
        }
        else
        {   
            //Not Crit
            this.EnemyCharacter.SetHP(this.EnemyCharacter.HP - Damage);
            this.DamageManger.ShowDamage(Damage,false);
        }

    },
    SetHP(value)
    {
        this.HP = value;
        this.HealthBar.UpdateHealthBar();
    },

    // update (dt) {},
});
