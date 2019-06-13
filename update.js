const request = require('request');
const fs = require('fs');
const exec = require('child_process').exec;
const { success, error, warning } = require('./message');
const { ARCHIVE_PATH, SHELL_PATH, STABLE_URI } = require('./config');
module.exports = function () {
    const file = fs.createWriteStream(ARCHIVE_PATH);

    // 拉取版本号对应的zip文件
    request.get(STABLE_URI).on('error', e => {
        error(e.message);
        error(`vscode更新失败`);
    }).pipe(file);

    file.on('finish', () => {
        exec(SHELL_PATH, (err, stdout, stderr) => {
            if (err) {
                error(err);
                error(`vscode更新失败`);
            }
            if (stderr) {
                warning(stderr);
            } else {
                success(`vscode更新成功`);
            }
        });
    });
}