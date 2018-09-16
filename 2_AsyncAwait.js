const promisifying = require('./2_promisifying');

async function foo() {
    const res = await promisifying('http://nodejs.org/dist/index.json');
    console.log(res);
    return res;
}

foo()
