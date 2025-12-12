//funkce - jsou bloky kodu, ktere muzeme privolat,zadat jim argumenty a opakovane volat napric kodem

console.log("toto je nazev funkce:");
//1.ukazka primitivni funkce 
function nazev(){
    let hodnota=Number(prompt("zadej cislo"));
    console.log((hodnota%2)==1);
}
nazev(); //privolani funkce 

//2. ukazka funkce s parametry a return

function secti (){
    let a= Number(prompt("zadej a"));
    let b= Number(prompt("zadej b"));
    let soucet = a+b; //tato promenna neni videt mim o funkci
    console.log(soucet);
    return soucet;// v raci hodnotu z funkce
}
secti(7,3);//doplni do parametu funkce a= 7, b = 3 

console.log(soucet);//nebude nalezen je uv n itr funkce
let prvni=10;
let druha=3;
console.log(secti(prvni+druha)+20);

//3. plna struktura
/*

*/