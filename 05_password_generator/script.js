const lenghtp = document.querySelector('#lenght-input')
const uppercase = document.querySelector('#uppercase-input')
const lowercase = document.querySelector('#lowercase-input')
const Numbers = document.querySelector('#Numbers')
const Symbols = document.querySelector('#Symbols')
const passInput = document.querySelector('#pass-input')
const copy = document.querySelector('#copy');
const generate = document.querySelector('#generate-btn'); 

// console.log(lenghtp)
// console.log(uppercase)
// console.log(Numbers)
// console.log(lowercase)
// console.log(Symbols)

const uppercaseStr = " ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercaseStr = " abcdefghijklmnopqrstuvwxyz"
const NumbersStr = " 1234567890"
const SymbolsStr = " !@#$%^&*()_+~*/"

generate.addEventListener('click', () => {
let str = " "

if (uppercase.checked){
    str += uppercaseStr
}
if (lowercase.checked){
    str += lowercaseStr
}
if(Numbers.checked){
    str += NumbersStr
}
if(Symbols.checked){
    str += SymbolsStr
}

console.log(str,"str")
let password =""
for (let i = 0; i < lenghtp.value ; i++) {
    console.log(str.length  ,"Str.lenght ")
    let index = Math.floor(Math.random() * str.length)
    console.log(index,"index");
    console.log("math Random" , Math.random() )
    console.log("Math.random ()* str.lenght" , Math.random()*str.lenght)
    console.log(str[index])
    password += str[index]
}
console.log(password)
passInput.value= password;
})