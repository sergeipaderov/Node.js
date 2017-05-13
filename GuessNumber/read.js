var readline = require('readline'),
    argv = require('minimist')(process.argv.slice(2)),
    fs = require('fs'),
    mind, count, rl, logfile;

function init() {
    mind = Math.floor(Math.random() * 10) + 1;
    count = 0;
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    logfile = argv['_'][0];
}

function game() {
    function log(data) {
        if (logfile != undefined)
            fs.appendFile(logfile, data + "\n");
    }

    function valid(value) {
        if (isNaN(value)) {
            console.log('Enter a number!');
            return false;
        } else if (value < 1 || value > 10) {
            console.log('Number must to be between 1 and 10');
            return false;
        }
        return true;
    }

    rl.question('Enter any number from 1 to 10 for guess the number: ',
        function (value) {
            var a = +value;
            if (!valid(a)) {
                game();
            } else {
                count += 1;
                if (a === mind) {
                    console.log('Congratulations! You guessed the number in %d step(s)', count);
                    log('Congratulations! You guessed the number in ' + count + ' step(s)');
                    rl.close();
                } else {
                    console.log('You didn\'t guess the number. Do you want try again?');
                    game();
                }
            }
        });
}

init();
game();