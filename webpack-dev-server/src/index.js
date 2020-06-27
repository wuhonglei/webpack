import axios from 'axios';
import './base.css';

/**
 *  <button id="queryBtn">请求数据</button>
 *  <button id="updateBtn">修改数据</button>
 *  <button id="deleteBtn">删除数据</button>
 */
console.info('process.env.NODE_ENV', process.env.NODE_ENV);

const queryBtn = document.querySelector('#queryBtn'),
    updateBtn = document.querySelector('#updateBtn'),
    deleteBtn = document.querySelector('#deleteBtn'),
    other = document.querySelector('#other');

queryBtn.onclick = () => {
    axios.get('/person')
        .then((res) => {
            console.info(res.data);
        })
        .catch((err) => {
            console.error(err);
        });
};

updateBtn.onclick = () => {
    axios.post('/person')
        .then((res) => {
            console.info(res.data);
        })
        .catch((err) => {
            console.error(err);
        });
};

deleteBtn.onclick = () => {
    axios.delete('/person')
        .then((res) => {
            console.info(res.data);
        })
        .catch((err) => {
            console.error(err);
        });
};

other.onclick = () => {
    axios.get('/other')
        .then((res) => {
            console.info(res.data);
        })
        .catch((err) => {
            console.error(err);
        });
};