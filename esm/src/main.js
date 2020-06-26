import { getUsefulContents } from './file.js';
import { forEach } from '../node_modules/lodash-es/lodash.js';
// import { forEach } from 'https://unpkg.com/lodash-es@4.17.15/lodash.js';

forEach([1, 2, 3], (item) => {
    console.info(item);
});