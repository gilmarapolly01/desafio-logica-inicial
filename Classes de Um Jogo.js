class AventuraDoHeroi {
    constructor(nameHeroi, idadeHeroi, tipoHeroi) {
        this.nameHeroi = nameHeroi;
        this.idadeHeroi = idadeHeroi;
        this.tipoHeroi = tipoHeroi;
    }

    atacar() {
        let ataque;
        if (this.tipoHeroi === "mago") {
            ataque = "usou magia";
        } else if (this.tipoHeroi === "guerreiro") {
            ataque = "usou espada";
        } else if (this.tipoHeroi === "monge") {
            ataque = "usou artes marciais";
        } else if (this.tipoHeroi === "ninja") {
            ataque = "usou shuriken";
        }
        console.log(`O ${this.tipoHeroi} atacou usando ${ataque}`);
    }

    escrever() {
        console.log(`O herói ${this.nameHeroi}, idade ${this.idadeHeroi}`);
    }
}

let heroi = new AventuraDoHeroi("Gilmara", 18, "ninja");
heroi.escrever();
heroi.atacar();

