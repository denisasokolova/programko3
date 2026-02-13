for(let i=0; i <= 10; i++) {
    console.log(2**i);
}
let promenna = "";


for(let i=0; i < 5; i++ ){
    promenna += "*";
    console.log(promenna);
}


let vypis="";
let n = Number (prompt("zadej cislo"));
for( let i=0; i < n; i++ ){
    
    vypis += i + ",";
}


let pocet=0;
for(let i=0; i <= 100; i++){
   if (i % 2 ===0) {
    pocet ++;
   }
}
console.log("celkovy pocet sudych cisel je " + pocet);