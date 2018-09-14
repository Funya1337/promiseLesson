const fs = require('fs');

function AsyncRead(first, second, third) {
    console.time('AsyncTime');
    fs.readFile(first, 'utf8', (err, data) => {
        // console.log(data);
    })
    fs.readFile(second, 'utf8', (err, data) => {
        // console.log(data);
    })
    fs.readFile(third, 'utf8', (err, data) => {
        // console.log(data);
        console.timeEnd('AsyncTime');
    })
}

AsyncRead('test.txt', 'test1.txt', 'test2.txt');

function SyncRead1(first, second, third) {
    console.time('SyncTime');
    let data0 = fs.readFileSync(first, 'utf8');
    let data1 = fs.readFileSync(second, 'utf8');
    let data2 = fs.readFileSync(third, 'utf8');
    // console.log(data0);
    // console.log(data1);
    // console.log(data2);
    console.timeEnd('SyncTime');
}
SyncRead1('test.txt', 'test1.txt', 'test2.txt');