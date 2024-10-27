const inputField = document.getElementById('password')
const out = document.getElementById('output')
// console.log(input)
inputField.addEventListener('input', function () {
    console.log(inputField.value);
    let password = inputField.value;
    if (password.length < 8) {
        out.innerText = 'password is too short ';
        out.style.color = 'red';
    } else {
        if (password.search(/[a-z]/) == -1) {
            out.innerText = '- should contain at least one lowercase letter';
            out.style.color = 'red';
        } else if (password.search(/[A-Z]/) == -1) {
            out.innerText = '- should contain at least one Uppercase letter';
            out.style.color = 'red';
        } else if (password.search(/[0-9]/) == -1) {
            out.innerText = 'should contain atleast one numeric value';
            out.style.color = 'red';

        } else if (password.search(/[ !\@\#\$\%\^\&\*\(\)\-\_\=\+\|\[\]\{\}\;\:\?\ ]/) == -1) {
            out.innerText = 'should contain atleast special  value';
            out.style.color = 'red';
        } else {
            out.innerText = '- password is strong';
            out.style.color = 'green';
        }



    }
})

// email : omkarpatil3821@gmail.com
// project No. 2 (day 2 )