function prvni(){
    let cislo = Number(prompt("zadej cislo"));
    if (cislo % 2 == 0) {
        console.log("cislo je sude");    
    }
    else {
        console.log("cislo je liche");
    }
}
prvni();