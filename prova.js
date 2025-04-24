const canvas = document.getElementById("jogo2d");

class personagem {
    constructor(vida, forca, energia, tipo) {
        this.vida = vida;
        this. forca = forca;
        this.energia = energia;
        this.energia = tipo;
    }
}
let p1 = new personagem (100, 50, 50, comum)
let p2 = new personagem (100, 50, 50, guerreiro)

class guerreiro extends personagem {
    constructor(vida, forca, energia, tipo){
        super(vida, forca, energia, tipo);
        
    } defenderescudo (recuperou){
        let defender = 10;
        console.log ("guerreiro se defendeu com o escudo")
        recuperou.vida += defender;
        console.log (`guerreiro recuperou ${this.vida}`)
    }
    atacar(algo){
        let ataque = 25;
        console.log("guerreiro atacou");
        algo.vida -= ataque;
        if (algo.vida <=0) {
            console.log("`${this.tipo}´, morreu ");
        } else if(algo.vida > 0) {
            console.log("proximo turno")
        }
    }
}
class mago extends personagem {
    constructor(vida, forca, energia, tipo){
        super(vida, forca, energia, tipo);
        
    }
     regenerar (cura){
        let regenerar = 20;
        console.log ("mago se regenerou")
        cura.vida += regenerar;
        console.log (`mago possui ${this.vida}`)
    } atacar(algo){
        let ataque = 10;
        console.log("mago atacou");
        algo.vida -= ataque;
        if (algo.vida <=0) {
            console.log("`${this.tipo}´, morreu ");
        } else if(algo.vida > 0) {
            console.log("proximo turno")
        }
    }
}
class arqueiro extends personagem {
    constructor(vida, forca, energia, tipo){
        super(vida, forca, energia, tipo);
        
    } defenderarco (recuperou){
        let defender = 10;
        console.log ("arqueiro se defendeu com o arco")
        recuperou.vida += defender;
        console.log (`arqueiro recuperou ${this.vida}`)
    } atacar(algo){
        let ataque = 20;
        console.log("arqueiro atacou");
        algo.vida -= ataque;
        if (algo.vida <=0) {
            console.log("`${this.tipo}´, morreu ");
        } else if(algo.vida > 0) {
            console.log("proximo turno")
        }
    }
}
