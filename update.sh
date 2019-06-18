#!/bin/bash
#unzip /d/vscode_update_program/vscodePackage/vscode.zip -d /d/vscode_update_program/vscodePackage/package/
#rm -rf /d/vscode/*
#mv /d/vscode_update_program/vscodePackage/package/* /d/vscode/
#rm -rf /d/vscode_update_program/vscodePackage/vscode.zip /d/vscode_update_program/vscodePackage/package/*

echo ${1}
echo ${2}
echo ${3}

unzip ${1} -d ${2}/
rm -rf ${3}/*
mv ${2}/* ${3}/
rm -rf ${1} ${2}/*
exit