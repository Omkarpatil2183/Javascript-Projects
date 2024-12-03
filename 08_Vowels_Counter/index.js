const textarea = document.querySelector("#textarea");
const button = document.querySelector("#button");
const output = document.querySelector(".output");

button.addEventListener("click", function() {
    if (textarea.value === "") {
        // alert("Please Enter Your Text");
        output.innerHTML = " Please Enter Your Text";
    }
    else{
        const val = textarea.value;
        let count = 0 ;
        for (let i=0; i<val.length; i++ ){
            if (val[i] === "a" || val[i] === "e" || val[i] === "i" || val[i] === "o" || val[i] === "u"){
                count++ ;
            }
            if (val[i] === "A" || val[i] === "E" || val[i] === "I" || val[i] === "O" || val[i] === "U"){
                count++ ;
            }
        }
        output.innerHTML = ` Total Vowels present in your text = ${count}`;
    }
})