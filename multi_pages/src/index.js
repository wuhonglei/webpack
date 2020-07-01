import { test } from './math.js';
import { forEach } from 'lodash-es';

console.info('index.js');
test();

forEach([1, 2, 3], (item) => {
    console.info(item, ' ');
})