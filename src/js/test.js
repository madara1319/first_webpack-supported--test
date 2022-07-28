import {hello as hi, Biku} from  './hello.js';
import human from './default.js'
import * as hello from './anotherhello.js'
console.log(hello.Lilo)
console.log(hello.siema('Byku'))
console.log(human)
console.log(hi('Mateusz'));


import {greet} from './js.js';

console.log(greet(32,'Mateusz'));
console.log(greet(5,'Józek'));
console.log(Biku);
console.log(greet(human.age,human.name))