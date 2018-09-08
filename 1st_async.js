const fs = require('fs');

function AsyncRead(first, second, third) {
    setTimeout(() => {
        fs.readFile(first, 'utf8', function(err, content1) {
            if (err) {
                console.error(err);
            } else {
                console.log(content1);
                setTimeout(() => {
                    fs.readFile(second, 'utf8', function(err, content2) {
                        if (err) {
                            console.error(err);
                        } else {
                            console.log(content2);
                            setTimeout(() => {
                                fs.readFile(third, 'utf8', function(err, content3) {
                                    if (err) {
                                        console.error(err);
                                    } else {
                                        console.log(content3);
                                    }
                                });
                            }, 100)
                        }
                    });
                }, 100)
            }
        });
    }, 100)
}
AsyncRead('test.txt', 'test1.txt', 'test2.txt');