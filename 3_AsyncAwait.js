const fetch = require('node-fetch');

 async function fetchPromise2() {
    let obj = {};
     try {
        let response = await fetch('http://nodejs.org/dist/index.json')
        let data = await response.json();
        let x = Object.keys(data[0])[0];
        let y = Object.values(data[0])[0];
        obj[x] = y;

        let response1 = await fetch('https://nodejs.org/api/console.json')
        let data1 = await response1.json();
        const x1 = Object.keys(data1);
        const key1 = x1[0];
        obj[key1] = data1[key1];

        let response2 = await fetch('https://raw.githubusercontent.com/klishevich/codingbootcamp/master/package.json')
        let data2 = await response2.json();
        let x2 = Object.keys(data2);
        let y2 = Object.values(data2);
        obj[x2[0]] = y2[0];
        return obj;
     }
     catch (error) {
         console.log(`ERROR1: ${error.stack}`);
     }
}
fetchPromise2()
.then(data => console.log(data))