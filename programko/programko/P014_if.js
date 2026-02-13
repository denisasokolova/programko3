//KDYŽ - slouží k větvení kódu

//základní struktura
let podminka = 5;

//u IF se v podmínce , vždy musí objevit POROVNÁVACÍ operátor
if (podminka > 0){
    console.log("tento kód se spustí pokud výsledek závorky s podmínkou je TRUE");
}

if (podminka < 0){
    console.log("tento kód se nespustí pokud výsledek závorky s podmínkou je FALSE");
}

console.log("Venku je krásně!"); //tento kó je mimo IF --> takže se spustí vždy

let vek=18;
if (vek>18){
    console.log("vystup podminky je true");
} else if (vek <18){
    console.log("tento kod se spusti jedine pokud podminka if vyjde false a tato true");
} else if (vek ==18){
    console.log("pokud predchozi podminky vysly false tak se otestuje tento kod zda lze spustit");
} else {
    console.log("pokud vse pred timto vyjde faslse tak se spustim");
}

//vnorene if 
let pohlavi="žena";
vek =20;

if (pohlavi == "žena"){
    console.log("tato osoba je zena");
    if(vek <18){
        console.log("osoba je nezletila");
    }else{
        console.log("osoba je zletila");
    }
}

//logicke operatory pro vice podmnek 
if (podminka == "žena" && vek >18){
    console.log("pokud je osoba žena starší 18 let kod se spustí");
}    else if (pohlavi == "žena" || vek <=18){
        console.log("musi platit aspon jedna");
    }







