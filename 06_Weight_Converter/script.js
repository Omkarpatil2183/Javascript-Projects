/* <!-- email omkarpatil3821@gmail.com --> */

const input = document.querySelector('input');
const output = document.querySelector('#output-p');

input.addEventListener("input", () => {
    let value = input.value;
    let outputValue = value*2.2;
    // console.log(outputValue)
    output.innerHTML= outputValue.toFixed(2)
})