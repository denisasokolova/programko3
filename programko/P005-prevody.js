
let desetiny = "2.55";
let celeCISLO = "3";

//převod jiného datového typu na další - parsefloat, parseInt, Number, toString
parseFloat(desetiny);

//převod na číslo - hodnota, 10/16 - znčí číselnou soustavu
parseInt(celeCISLO, 10);
console.log(celeCISLO);

//Number - převod na číslo
Number("123456789");
console.log(Number("987654321"));

//toString - převod na textový řetězec
let text = 454545;
toString(text);
console.log(text);

text.toString(); //toto převede hodnotu proměnné text na String