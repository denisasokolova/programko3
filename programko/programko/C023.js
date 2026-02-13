
let cislo1;
let cislo2;
let operace;
let podminka;

do{
    cislo1 = Number (prompt("zadej prvni cislo"));
    cislo2 = Number (prompt("zadej druhy cislo"));
    operace = prompt("zadej +,-,*,/");

   if (operace == "+") {
    cislo1 + cislo2;
   }
   if (operace == "-") {
    cislo1 - cislo2;
   }
   if (operace == "*") {
    cislo1 * cislo2;
   }

   podminka= prompt ("pro ukonceni programu muze uzivatel zadat X");

}while(podminka !== "x" && podminka !=="X");