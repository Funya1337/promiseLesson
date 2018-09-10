const fetch = require('node-fetch');

const p = new Promise(
    (resolve, reject) => {
        let promise1 = fetch('https://nodejs.org/api/console.json')
        .then(res => res.json());
        let promise2 = fetch('https://raw.githubusercontent.com/klishevich/codingbootcamp/master/package.json')
        .then(res => res.json());
        let promise3 = fetch('http://nodejs.org/dist/index.json')
        .then(res => res.json());
        resolve(promise1, promise2, promise3);
    }
)
p.then((requests) => {
    console.log(promise1, promise2, promise3);
})
.catch((err) => {
    console.log(1111, err);
})