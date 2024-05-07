const letters_lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const letters_uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const numbers = ['0','1','2','3','4','5','6','7','8','9'];
const special_symbols = ['!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~'];

const capitalLetters = document.getElementById('capitalLetters');
const hasnumbers = document.getElementById('hasNumbers');
const specialSymbols = document.getElementById('specialSymbols');
const passwordLength = document.getElementById('passwordLength');
const generateButton = document.getElementById('generateButton');
const myPassword = document.getElementById('myPassword');

generateButton.onclick = function(){
    let password ='';
    let password_length = 0 ;
    let rq = letters_lowercase;
    password_length = Number(passwordLength.value);

    if (capitalLetters.checked){
        rq = rq.concat(letters_uppercase);
    }

    else{
        //pass
    }

    if (hasnumbers.checked){
        rq = rq.concat(numbers);
    }

    else{
        //pass
    }

    if (specialSymbols.checked){
        rq = rq.concat(special_symbols);
    }

    else{
        //pass
    }

    for (i=0; i<password_length; i++){
        password += rq[Math.floor(Math.random()*rq.length)];
    }

    myPassword.textContent = password;
}


// console.log(rq.concat(numbers));