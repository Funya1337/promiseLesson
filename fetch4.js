const fetch = require('node-fetch');
let promise1 = fetch('https://nodejs.org/api/console.json')
    .then(res => res.json());
let promise2 = fetch('https://raw.githubusercontent.com/klishevich/codingbootcamp/master/package.json')
    .then(res => res.json())
let promise3 = fetch('http://nodejs.org/dist/index.json1')
    .then(res => res.json())
    let obj = {};

Promise.all([promise1, promise2, promise3])
.then((requests) => {
    let x = Object.keys(requests[0])[0];
    let y = Object.values(requests[0])[0];
    let x1 = Object.keys(requests[1])[0];
    let y1 = Object.values(requests[1])[0];
    let x2 = requests[2];
    obj[x] = y;
    obj[x1] = y1;
    obj.test = x2[0];
    console.log(obj);
})
.catch((err) => {
    console.log(1111, err);
})