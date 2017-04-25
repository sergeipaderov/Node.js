var request = require('request');

request.get(
    'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170425T151526Z.88513107f0c12b45.c4e71d1ececfa3be6f9ff4159a5dc40bf334df69',
    function (error, response, body) {
        if (error) {
            console.log(error);
        } else {
            console.log(body);
            console.log(response.statusCode);
        }
    }
);