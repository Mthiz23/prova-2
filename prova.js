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
        
    }
    atacar(algo){
        let ataque = 20;
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
    
}
class arqueiro extends personagem {
    constructor(vida, forca, energia, tipo){
        super(vida, forca, energia, tipo);
        
    }
}
