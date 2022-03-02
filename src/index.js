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
     let resStr = '';
    const exprLitArr = expr.match(/.{1,10}/g).map(element => element === '**********' ? element = ' ' : element = element.replace(/^0+/, ''));
    exprLitArr.forEach(element => {
      let litMorseStr = element.match(/.{1,2}/g).map(el1 => el1 = el1.replace(/10/i, '.').replace(/11/i, '-')).join(''); 
      if (litMorseStr === ' ') resStr += ' ';
      for (let key in MORSE_TABLE) {
        if (key === litMorseStr) resStr += MORSE_TABLE[key];
      }
    })
  return resStr;
}

module.exports = {
    decode
}
