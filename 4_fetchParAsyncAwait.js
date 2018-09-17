const fetch = require('node-fetch');
async function foo() {
    let promise1 = fetch('https://nodejs.org/api/console.json')
    let promise2 = fetch('https://raw.githubusercontent.com/klishevich/codingbootcamp/master/package.json')
    let promise3 = fetch('http://nodejs.org/dist/index.json')

    const res = await Promise.all([promise1, promise2, promise3]);
    const promiseArr = res.map(res => res.json());
    return Promise.all(promiseArr);
}
let obj = {};
foo()
.then((res) => {
    let x = Object.keys(res[0])[0];
    let y = Object.values(res[0])[0];
    obj[x] = y;
    let x1 = Object.keys(res[1])[0];
    let y1 = Object.values(res[1])[0];
    obj[x1] = y1;
    let x2 = Object.keys(res[2]);
    let y2 = Object.values(res[2]);
    obj[x2[0]] = y2[0];
    console.log(obj)
})