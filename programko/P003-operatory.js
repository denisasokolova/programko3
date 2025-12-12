let prvni=5;
let druha=3;
let vysledek;

//operatory v js
//
//scitani
//1. aritmeticke operatory
vysledek=prvni+druha;
//console.log(prvni + druha);
console.log(vysledek);

//pozor na string
vysledek = "5" + 3;
console.log(vysledek);
//
//odcitani
vysledek = prvni - druha;
console.log(vysledek); 
//
//nasobeni
console.log(5*3);
//
//deleni
console.log(5/3);
//
//modulo
//zbytek podeleni
vysledek=prvni%druha;
console.log(vysledek);
//
//intermentace (++) - to same  jako +1
vysledek=prvni++; //nelze pouzit jako vysledek =vysledek ++ 
console.log(vysledek);
//
//dekrememtace (--) tosame jako -1
vysledek=3;
vysledek--;
console.log(vysledek);
//
//exponent (**)
console.log(5**2); // pet na druhou
console.log(5**-2); //druha odmocnina z cisla 5
//
//PRIRAZOVACI OPERATORY
//(=) rovna se
let deklarace =3;
//(+=) scitani
vysledek=3;
vysledek+=5;// vysledek=vysledek+5
console.log(vysledek);
// (-=)odcitani
vysledek-=3;
// (*=) nasobeni
vysledek*=2;
// (/=) deleni
vysledek/=5;
// (%=) modulo
vysledek%=5;
//
//
//POROVNAVACI  OPERATORY
//vystup je vzdy true/false
console.log("3. porovnacvaci operatory");
//
//porovnavani hodnot (==)
vysledek=3;
console.log(vysledek==3);
console.log(prvni==druha);
//
//porovnavani hodnot a datoveho tyopu (===)
console.log(vysledek==="3");
//
//porovnavani nerovnosti hodnot (!=)
vysledek=3;
console.log(vysledek!=3);
console.log(vysledek!=5);
//
console.log(vysledek!="3");
console.log(vysledek!=="3");
//
//LOGICKE OPERATORY
//vystup true/false 
//slouzi pro spojeni vice operaci
console.log("4 logicke operatory");
//
//logicky soucin and (&&) (pravej alt c)
console.log(5 > 3 && 5 < 3);
//
//logicky soucet or (||) (pravej alt w)
console.log(5 > 3 || 5 < 3);
//
//logicka negace not (!)
console.log(!(5 > 5));
//
console.log((!(5 > 5)) && (5>3) || (5<3));
//
//PODMINKOVE OPERATORY
//podminka ? vystup pokud plati vystup pokud neplati
console.log("5 podminkove operatory");
//
console.log(5==5? "ano" : "ne");
//
//
//operatory retezcu
//slozi k spojovani textu
console.log("6 operatory retezcu");
//
//spojeni retezcu (+)
console.log("ahoj" + " svete");
//
let x ="ahoj";
let y = " svete";
console.log(x+y);
let vysledna = x+y;