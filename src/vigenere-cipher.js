import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

export default class VigenereCipheringMachine {
  constructor(expr) {
    this.expr = expr;
  }
  encrypt() {
    if (arguments[0] === undefined || arguments[1] === undefined) {
      throw new Error(`Incorrect arguments!`);
    }

    let message = arguments[0].toUpperCase();
    let key = arguments[1].toUpperCase();
    let encryptKey = '';
    let abcArray = Array.from({length: 26}, (e, i) => e = String.fromCharCode(i+65));
    let testMessage = message.split('').filter(e => /[a-z]/gi.test(e)).join('');
    
    while (key.length < testMessage.length) {
      key = key.repeat(2);
    }
    key = key.slice(0, testMessage.length);
    
    for (let k in testMessage) {
      let messageIndex = abcArray.findIndex(e => e === testMessage[k]);
      let keyIndex = abcArray.findIndex(e => e === key[k]);
      let encryptIndex = messageIndex + keyIndex;
      if (encryptIndex < 26) {
        encryptKey += String.fromCharCode(encryptIndex + 65);
      }
      else {
        encryptKey += String.fromCharCode(encryptIndex + 39);
      }
    }
    
    let j = 0;
    let encryptArray = [];
    for (let k in message) {
      if (/[a-z]/gi.test(message[k])) {
        encryptArray.push(encryptKey[j]);
        j++;
      }
      else {
        encryptArray.push(message[k]);
      }
    }

    return this.expr === false ? encryptArray.reverse().join('') : encryptArray.join('');
  }

  decrypt() {
    if (arguments[0] === undefined || arguments[1] === undefined) {
      throw new Error(`Incorrect arguments!`);
    }

    let message = arguments[0];
    let key = arguments[1].toUpperCase();
    let decryptKey = '';
    let abcArray = Array.from({length: 26}, (e, i) => e = String.fromCharCode(i+65));
    let testMessage = message.split('').filter(e => /[a-z]/gi.test(e)).join('');
    
    while (key.length < testMessage.length) {
      key = key.repeat(2);
    }
    key = key.slice(0, testMessage.length);
    
    for (let k in testMessage) {
      let messageIndex = abcArray.findIndex(e => e === testMessage[k]);
      let keyIndex = abcArray.findIndex(e => e === key[k]);
      let decryptIndex = 26 - keyIndex + messageIndex;
      if (decryptIndex > 25) {
        decryptKey += String.fromCharCode(decryptIndex + 39);
      }
      else {
        decryptKey += String.fromCharCode(decryptIndex + 65);
      }
    }

    let j = 0;
    let decryptArray = [];
    for (let k in message) {
      if (/[a-z]/gi.test(message[k])) {
        decryptArray.push(decryptKey[j]);
        j++;
      }
      else {
        decryptArray.push(message[k]);
      }
    }

    return this.expr === false ? decryptArray.reverse().join('') : decryptArray.join('');
  }
}
