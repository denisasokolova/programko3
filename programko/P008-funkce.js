//opakovani

function nazev_funkce(a,b) {
    let soucin = a*b;
    return soucin;

}
nazev_funkce(5,9);

//const - prebije funkci 

const pevna_hodnota = 3;
function konstanta(){
    let vysledek = pevna_hodnota +5;
    return vysledek;

}
konstanta();

//anonymni fukce - nemaji pojmenovany indifikator (nazev), ale mujze byt predana jako argument do dalsi funke

let soucet = function(a,b){
     
    return a+b;
}
console.log(soucet(7,2));

//vnorena funkce 

function vnorena(a,b){
    let soucet = function(a,b){
        return a+b;
    }
    return soucet(a,b); 
}
vnorena(7,3);
//callback funkce - jsou predany jako argumnty do dalsih funkci a volny pozdeji

function ukazrozash(){
    let lokalni_promenna= "hbdsnkhvb ";
    return lokalni_promenna;
}
let pomocna = ukazrozash();
console.log (pomocna);