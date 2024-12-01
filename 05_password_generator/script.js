/* <!-- email omkarpatil3821@gmail.com --> */
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
let password =""

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
});

copy.addEventListener('click', () => {
    if (passInput.value === " "){
        alert("please Generate Password")
    }
    else {
        const newelement = document.createElement('textarea')
        newelement.value = passInput.value;
        document.body.appendChild(newelement);
        newelement.select();
        document.execCommand("copy");
        alert("password copied succesfully ")
        newelement.remove();

        // passInput.select();
        // document.execCommand('copy');
        // alert("Password Copied")
    }
});
 