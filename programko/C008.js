function scitat (a,b){
    return a+b;
}
function odcitat (a,b){
    return a-b;
}
function nasobit (a,b){
    return a*b;
}
function delit (a,b){
    return a/b;
}
let prvni = Number(prompt("zadej prvni cislo"));
let druha = Number(prompt("zadej druhe cislo"));
console.log("vysledek operace  je:" +scitat(prvni,druha));
console.log("vysledek operace je:" +odcitat(prvni,druha));
console.log("vysledek operace je:" +nasobit(prvni,druha));
console.log("vysledek operace je:" +delit(prvni,druha));