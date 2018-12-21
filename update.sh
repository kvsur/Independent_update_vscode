#!/bin/bash

unzip /d/vscode_update_program/vscodePackage/vscode.zip -d /d/vscode_update_program/vscodePackage/package/
rm -rf /d/vscode/*
mv /d/vscode_update_program/vscodePackage/package/* /d/vscode/
rm -rf /d/vscode_update_program/vscodePackage/vscode.zip

exit