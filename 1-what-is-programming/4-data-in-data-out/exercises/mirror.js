'use strict';

/* Mirror

  Data In:
    any text

  Data Out:
    the reversed input and the vertical bar separating the unchanged input 

  Test Cases:
    'abc' -> 'abc | cba'
    'hello' -> 'olleh | hello'
    'dolphins' -> 'snihplod | dolphins'
*/

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('enter some text to mirror');
  console.log(input);
}

/* --- create mirrored text --- */

let mirrored = ' | ';
for (let character of input) {
  mirrored = character + mirrored + character;
  console.log(mirrored);
}

/* --- display mirrored text to the user --- */

alert(mirrored);