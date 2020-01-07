$.getJSON("API.json", function(API){



document.getElementById("preços").innerHTML=API.promo[0].promo;

console.log(API.promo[0].promo);

});