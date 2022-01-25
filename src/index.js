const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    var array=[];
    var array2=[];
    var str='';
    for(let i=0;i<expr.length;i+=10){
        var sli=expr.slice(i, i + 10);
        array.push(sli);}
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array[i].length;j++){
            if(array[i][j]=="1" && array[i][j+1]=="0") {str+=".";
        j++;}
        if(array[i][j]=="1" && array[i][j+1]=="1") {str+="-";
        j++;}
            if (array[i][j]=='0' && array[i][j+ 1] == '0') {
                j++;
                continue;
            }
            if(array[i][j]=="*"){str+=' ';  break;}
            
        }
        array2.push(str);
    str='';
    }
    
    for (let i = 0; i < array2.length; i++) {
        if (array2[i] === ' ') {
          str += ' ';
        } else {
          str += MORSE_TABLE[array2[i]];
        }
      }
    
      return str;
    
}


module.exports = {
    decode
}