module.exports = {
    SHELL_PATH: './update.sh', // 更新版本所需shell脚本的存放位置
    INSTALL_PATH: '../vscode',
    UNZIP_PATH: './vscodePackage/package',
    ARCHIVE_PATH: './vscodePackage/vscode.zip', // 新版本压缩包下载后存放路径
    STABLE_URI: 'https://update.code.visualstudio.com/latest/win32-x64-archive/stable', // 最新稳定版包的获取地址
    MESSAGE: {
        success: 'green',
        error: 'red',
        warning: 'yellow',
    },
}