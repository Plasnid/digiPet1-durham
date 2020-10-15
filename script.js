function Tamogotchi(tamoName) {
    //
    this.petName;
    this.initialFood = 60;
    this.metabolismRate = 1000;

    this.init = () => {
        this.petName = tamoName;
        console.log(`Hi!  I'm ${this.petName}`);
        this.hatch();
    }
    this.init();
}
Tamogotchi.prototype.resetFood = function(){
    this.food=this.initialFood;
}

Tamogotchi.prototype.hatch = function(){
    this.resetFood();
    this.startMetabolism();
}
Tamogotchi.prototype.die = function(){
    clearInterval(this.metabolism);
    console.log("I am dead!");
}
Tamogotchi.prototype.startMetabolism = function(){
    this.metabolism = setInterval(()=> {
        this.food -=1;
        console.log(`${this.food} until I starve`);
        if(this.food<=0){
            this.die();
        }
    },this.metabolismRate);
}

Tamogotchi.prototype.eatLasagna = function() {
    console.log(`can I see the food? ${this.food}`);
    this.food +=20;
}