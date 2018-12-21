const request = require('request');
const fs = require('fs');
const exec = require('child_process').exec;
const { success, error, warning } = require('./message');
const { ZIP_URI, VERSION_URI, ARCHIVE_PATH, SHELL_PATH } = require('./config');

module.exports = () => {
    // 首先获取最新的版本号
    request.get(VERSION_URI, (err, response, body) => {
        const html = body.toString();

        // 通过 strong 标签 加上 Update 关键字匹配到信息 节点
        const infoReg = (/<strong>Update[^(</strong>)]+<\/strong>/g);

        // 再一次精准匹配版本号 version
        const versionReg = (/\d.+</g);

        const version = html.match(infoReg)[0].match(versionReg)[0].replace('<', '');

        // 将版本号插入到拉取zip文件的URI中取
        const vscode_udpate_url = ZIP_URI.join(version);

        // 创建即将拉取的zip文件的文件流
        const file = fs.createWriteStream(ARCHIVE_PATH);

        // 拉取版本号对应的zip文件
        request.get(vscode_udpate_url).on('error', e => {
            error(e.message);
            error(`vscode更新失败，版本号：${version}`);
        }).pipe(file);

        file.on('finish', () => {
            exec(SHELL_PATH, (err, stdout, stderr) => {
                if (err) {
                    error(err);
                    error(`vscode更新失败，版本号：${version}`);
                }
                if (stderr) {
                    warning(stderr);
                } else {
                    success(`vscode更新成功，版本号：${version}`);
                }
            });
        });
    });
}
