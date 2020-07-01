import { cube } from './math.js';

import './base.css';
console.info(cube(3));

var person = {};
console.info(`${person?.name}`);

if ('name'.startsWith('na')) {
    console.info('ok');
}