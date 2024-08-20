let nomeHero = "Mulher Maravilha";
let xP = 100;

if (xP < 1000) {
    console.log(nomeHero + " Está no nivel " +" Ferro");
} else if (xP >= 1000 && xP <= 2000) {
    console.log(nomeHero + " Está no nivel " + " Bronze");
} else if (xP > 2000 && xP <= 5000) {
    console.log(nomeHero + " Está no nivel " + " Prata Ouro");
} else if (xP > 5000 && xP <= 8000) {
    console.log(nomeHero + " Está no nivel " + " Platina Diamante");
} else if (xP > 8000 && xP <= 9000) {
    console.log(nomeHero + " Está no nivel " + " Ascendente");
} else if (xP > 9000 && xP <= 10000) {
    console.log(nomeHero + " Está no nive l" + " Imortal");
} else if (xP >+ 10001) {
    console.log(nomeHero + " Está no nivel " + " Radiante");
}
