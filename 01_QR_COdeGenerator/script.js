const qrinput = document.getElementById('qr-input');
const qrImg = document.getElementById('qr-img')
const qrBtn = document.getElementById('qr-btn')
// console.log(qrinput,qrBtn,qrImg)

qrBtn.addEventListener('click' ,() =>{
const inputValue = qrinput.value;
console.log(inputValue);

if (inputValue == '' ){

    alert('please enter your link');
    return;
}
else{
qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
qrImg.alt=`QR code for ${inputValue}`;
}
})