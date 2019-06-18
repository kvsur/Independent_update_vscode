const request = require('request');
const fs = require('fs');
const exec = require('child_process').exec;
const { success, error, warning } = require('./message');
const { ARCHIVE_PATH, SHELL_PATH, STABLE_URI, INSTALL_PATH, UNZIP_PATH } = require('./config');
module.exports = function () {
    const file = fs.createWriteStream(ARCHIVE_PATH);
    // const args = [ARCHIVE_PATH, UNZIP_PATH, INSTALL_PATH];

    // fetch the lasest stable version of vscode
    request.get(STABLE_URI).on('error', e => {
        error(e.message);
        error(`Update vscode failed0.`);
    }).pipe(file);

    file.on('finish', () => {
        const shell = `sh ${SHELL_PATH} ${ARCHIVE_PATH} ${UNZIP_PATH} ${INSTALL_PATH}`;
        warning(shell);
        exec(shell, (err, stdout, stderr) => {
            if (err) {
                error(err);
                error(`Update vscode failed1.`);
            } else {
                success(`Update vscode success2.`);
            }
        });
    });
}