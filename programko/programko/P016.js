let i = 0;
while(i < 10){
    console.log(i + 1);
    // console.log(i);
    i++; //kdyz nenapisu tak to bude do nekonecnosti psat dokud nespadne

}

/*
while (podminka - dokud plati, kod se opakuje)
    ...kod se opakuje dokud podminka plati
*/


/*POZOR na nekonecne cykly*/

while(i != -5){
    console.log("Rajce");
}

/* while - pri spusteni se nejdrive otestuje podminka a pak se teprve provede blokovy kod*/
let x;
do{
    console.log("Jablicko");
    x = prompt ("Zadej x pro ukonceni");

}while(x !== "x"); /*kdyz nezadam tak bude do nekonecnosti vypisovat*/
/* do..while - se ride podminkou, az po prvnim provedeni blokoveho bodu */