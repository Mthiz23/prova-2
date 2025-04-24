const canvas = document.getElementById("jogo2d");

class personagem {
    constructor(vida, forca, energia, tipo) {
        this.vida = vida;
        this. forca = forca;
        this.energia = energia;
        this.energia = tipo;
    }
}
let p1 = new personagem (100, 50, 50, normal)

class guerreiro extends personagem {
    constructor(vida, forca, energia, tipo){
        super(vida);
        super(forca);
        super(energia);
        super(tipo);
    }
}
class mago extends personagem {
    constructor(vida, forca, energia, tipo){
        super(vida);
        super(forca);
        super(energia);
        super(tipo);
    }
}
class arqueiro extends personagem {
    constructor(vida, forca, energia, tipo){
        super(vida);
        super(forca);
        super(energia);
        super(tipo);
    }
}