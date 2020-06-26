import { forEach } from 'lodash-es';
import { cube } from './math.js';
console.info(cube(3));

forEach([1, 2, 3], (item) => {})

function dynamicLoad() {
    let btn = document.createElement('button');
    btn.textContent = '按需加载 jquery';
    btn.onclick = function() {
        import ( /* webpackChunkName: "jquery" */ 'jquery').then(({ default: $ }) => {
            $('button').text('按需加载完毕');
        });
    };
    document.body.appendChild(btn);
}

dynamicLoad()