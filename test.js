const request = require("request");
function httpGet(url) {
  return new Promise(
    (resolve, reject) => {
      request.get(url, (error, response, body) => {
        if (error) {
          reject(new Error('request Error: ' + error));
        } else {
          console.log(body);
        }
      });
    });
}

httpGet('http://example.com/file.txt')
.then((value) => {
  console.log(body);
})
.catch((reason) => {
  console.error('Something went wrong', reason);
});