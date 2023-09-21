let string = '101101';

function verifyPalindrom(string) {
    let inversedString = '';
    for(let i = string.length - 1; i >= 0; i--) {
        inversedString += string[i];
    }
    if(inversedString === string) console.log('Este palindrom')
    else console.log("Nu este palindrom")
}
verifyPalindrom(string);