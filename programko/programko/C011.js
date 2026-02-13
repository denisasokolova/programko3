function teplota(){
    let celsius = Number (prompt("zadejte teplotu ve stupnich cesia"));
    celsius = Number(celsius);
    let fahrenheit=(celsius*9/5)+32;
    console.log("teplota v C: " + celsius + ", teplota v F "+ fahrenheit);
}
teplota();