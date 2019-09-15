const cliColor = require("cli-color");

module.exports = {
    consoleLogTitle: function (title) {

        const titleLength = title.length;
        const titleBarBase = '-';
        const titleBar = titleBarBase.repeat(titleLength + 2);

        console.log('');
        console.log(cliColor.green('-- ' + titleBar + ' --'));
        console.log(cliColor.green('-- ' + ' ' + title + ' ' + ' --'));
        console.log(cliColor.green('-- ' + titleBar + ' --'));
        console.log('');

    },

    info: function (text) {
        console.log('');
        console.log(cliColor.yellow(text));
    },

    succesfull: function (text) {
        console.log('');
        console.log(cliColor.green(text));
    },

    error: function (text) {
        console.log('');
        console.log(cliColor.red(' ¡¡¡ ') + cliColor.red(text) + cliColor.red('!!!'));
    }
}

