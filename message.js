const chalk = require('chalk');
const chalkConfig = require('./config').MESSAGE;

Object.keys(chalkConfig).forEach(key => {
    module.exports[key] = content => {
        console.log(chalk[chalkConfig[key]](content));
    }
});