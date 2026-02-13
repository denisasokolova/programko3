let prvni = Number(prompt("zadej prvni cislo"));
let druha = Number(prompt("zadej druhe cislo"));

function soucin(a,b){
    return a*b;
}

function soucet(a,b){
    return a+b;
}

// soucin(prvni,druha); -> privola funkci zapise hodnoty promennych do parametru
console.log(soucin(prvni,druha)-soucet(prvni,druha));