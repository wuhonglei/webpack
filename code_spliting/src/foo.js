import { forEach } from 'lodash-es';
import { cube } from './math.js';

console.info(cube(2));


forEach([1, 2, 3], (item) => {
    console.info(item);
})