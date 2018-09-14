const fetch = require('node-fetch');

function fetchPromise2(url) {
    return fetch(url).then(res => res.json())
}

let obj = {};
fetchPromise2('http://nodejs.org/dist/index.json')
    .then((response) => {
        let x = Object.keys(response[0])[0];
        let y = Object.values(response[0])[0];
        obj[x] = y;
        console.log(obj);
        return fetchPromise2('https://nodejs.org/api/console.json')
    })
    .then((response) => {
        const x = Object.keys(response);
        const key1 = x[0];
        obj[key1] = response[key1];
        console.log(obj);
        return fetchPromise2('https://raw.githubusercontent.com/klishevich/codingbootcamp/master/package.json')
    })
    .then((response) => {
        let x = Object.keys(response);
        let y = Object.values(response);
        obj[x[0]] = y[0];
        console.log(obj);
    })
    .catch((err) => {
        console.log(1111, err);
    })