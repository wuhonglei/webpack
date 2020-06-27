// 参考 https://www.runoob.com/nodejs/nodejs-fs.html

const fs = require('fs');
const path = require('path');
const Promise = require('promise');

// 读取目录
function readDir(dir) {
    return new Promise((resolve, reject) => {
        fs.readdir(dir, (err, files) => {
            if (err) {
                return reject(err);
            }

            files = files.map(file => path.resolve(dir, file));
            resolve(files);
        });
    });
}

// 读取文件
function readFile(fullpath) {
    return new Promise((resolve, reject) => {
        fs.readFile(fullpath, (err, data) => {
            if (err) {
                return reject(err);
            }

            resolve(data);
        });
    });
}

// 写文件
function writeFile(fullpath, data) {
    return new Promise((resolve, reject) => {
        // 会覆盖原有内容（如果文件不存在，则会新建该文件）
        fs.writeFile(fullpath, data, 'utf8', (err) => {
            err ? reject(err) : resolve('success');
        });
    });
}

// 主函数
async function main(input, output) {
    const files = await readDir(input);
    const promises = [];
    files.map(file => {
        promises.push(readFile(file));
    });

    Promise.all(promises)
        .then(data => {
            return writeFile(output, data.join('\n'));
        })
        .then((res) => {
            console.info(res);
        })
        .catch((err) => {
            console.error(err);
        })
}

main('./src', './dist/main.js');