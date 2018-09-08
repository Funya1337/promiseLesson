const fs = require('fs');
function SyncRead(first, second, third) {
    fs.readFile(first, 'utf8', function(err, content1) {
        if (err) {
            console.error(err);
        } else {
            console.log(content1);
            fs.readFile(second, 'utf8', function(err, content2) {
                if (err) {
                    console.error(err);
                } else {
                    console.log(content2);
                    fs.readFile(third, 'utf8', function(err, content3) {
                        console.log(content3);
                    });
                }
            });
        }
    });
}
SyncRead('test.txt', 'test1.txt', 'test2.txt');