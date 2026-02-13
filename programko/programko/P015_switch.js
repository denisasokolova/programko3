let cislo = prompt ("zadej cislo");
cislo = Number(cislo);

switch (cislo) {
    case 4:
        console.log("pokud je hodnota cislo 4, tak me uvidis");
        break;
    case 2:
        console.log("pokud je hodnota cislo 2, tak me uvidis");
        break;
    case "1":
        console.log("pokud je hodnota cislo text 1, tak me uvidis");
        break;
    case 1:
        console.log("nazdar");
    default:
        console.log("tento kod je videt pokud se nespustil zadny z predchozich case");
        console.log("default je vzdy na konci");
        break;
}