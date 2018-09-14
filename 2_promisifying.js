const http = require('http');
function httpRequest(url) {
    return new Promise(
        (resolve, reject) => {
            http.get(url, (res) => {
                const { statusCode } = res;
                if (statusCode !== 200) {
                    reject(new Error(`Request Failed.\n Status Code: ${statusCode}`));
                } else {
                    let rawData = '';
                    res.on('data', (chunk) => {rawData += chunk; });
                    res.on('end', () => {
                        const parsedData = JSON.parse(rawData);
                        resolve(parsedData);
                    })
                }
            }).on('error', (e) => {
                reject(`Got error: ${e.message}`);
            });
        }
    )
}
httpRequest('http://nodejs1.org/dist/index.json')
.then((result) => {
    console.log(result);
})
.catch((reason) => {
    console.error('Server is not working', reason);
})