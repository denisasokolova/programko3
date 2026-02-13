function prvni(){
    let jmeno = prompt("Jak se jmenujete?");
    let prijmeni = prompt("a vase prijmeni?");
    console.log("vitejte "+jmeno + " s prijmenim " + prijmeni);
}


function druha(){
    
    let cislo1 = Number(prompt("zadej prvni cislo"));
    let cislo2 = Number(prompt("zadej druhe cislo"));
    return cislo1*cislo2;
}
prvni();
druha();