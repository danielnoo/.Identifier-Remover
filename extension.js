// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	const fs = require('fs')
	
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "identifierRemover" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('identifierRemover.helloWorld', function () {
		// The code you place here will be executed every time your command is executed
		fs.watch('./', {
			recursive: true,
		}, (eventType, filename) => {
			console.log(eventType, filename);
			vscode.window.showInformationMessage('WSL .Identifier Remover removed a .Identifier file');
		 });
		// Display a message box to the user
		vscode.window.showInformationMessage('WSL .Identifier Remover removed a .Identifier file');
	});

	fs.watch('./', {
		recursive: true,
	}, (eventType, filename) => {
		console.log(eventType, filename);
		vscode.window.showInformationMessage('WSL .Identifier Remover removed a .Identifier file');
	 });

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
