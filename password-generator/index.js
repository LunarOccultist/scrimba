const letterChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialChar = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];

let symbols = document.getElementById("symbols")
let numbers = document.getElementById("numbers")
let length = document.getElementById("length")

let lengthEl = document.getElementById("length-el")
let passwordEl = document.getElementById("password-el")

length.oninput = function() {
    lengthEl.textContent = `${this.value} Chars`
}

function selectChar(charType) {
    let x = Math.floor( Math.random()*charType.length )
    return charType[x]
}

function generate() {
    console.log("Generating Password...")
    let charPool = [...letterChar];

    if (numbers.checked) {
        charPool = charPool.concat(numChar);
    }
    if (symbols.checked) {
        charPool = charPool.concat(specialChar);
    }

    let generatedPass = "";

    for (let i = 0; i < length.value; i++) {
        generatedPass += selectChar(charPool);
    }
    passwordEl.textContent = generatedPass;
}
