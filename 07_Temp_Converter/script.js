const Celsius = document.querySelector("#celsius");
const Kelvin = document.querySelector("#Kelvin");
const Farenheit = document.querySelector("#Farenheit");

// Celsius to Farenheit  = (0'c * 9/5) + 32 = 32'f
// Celsius to kelvin = (0'c + 273.15 ) = 273.15k  
Celsius.addEventListener("input", function() {
    let c = parseFloat(Celsius.value);
    let f = (c * 9 / 5) + 32;
    let k = c + 273.15;
    Farenheit.value = f;
    Kelvin.value= k;
})

// Farenheit  to Celsius = (32'f - 32) * 5/9
// Farenheit to Kelvin = (32'f - 32) * 5/9 + 273.15 = 273.15k
Farenheit.addEventListener("input", function() {
    let f = parseFloat(Farenheit.value);
    let c = (f-32 ) * 5/9; 
    let k = (f-32) * 5/9 + 273.15;
    Celsius.value = c;
    Kelvin.value= k;
})

// Kelvin  to Celsius =  
// Kelvin to Farenheit = 
Kelvin.addEventListener("input", function() {
    let k = parseFloat(Kelvin.value);
    let c = k - 273.15
    let f = (0 - 273.15) * 9/5 + 32
    Celsius.value = c;
    Farenheit.value= f;
})

// gmail = omkarpatil3821@gmail.com 