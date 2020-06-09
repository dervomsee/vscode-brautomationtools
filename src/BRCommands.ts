import * as vscode from 'vscode';
import * as BREnvironment from "./BREnvironment";
import * as BRConfiguration from "./BRConfiguration";
import * as BRDialogs from './BRDialogs';
import * as BRAsProjectWorkspace from './BRAsProjectWorkspace';

/**
 * Registers all commands of the extension
 * @param context Extension context to push disposables
 */
export function registerCommands(context: vscode.ExtensionContext) {
    let disposable: vscode.Disposable | undefined; // disposable to push for clean up on deactivation
    //#region Commands accessible in UI by using Ctrl+Shift+P
	// Command: Force activation of extension
	disposable = vscode.commands.registerCommand('vscode-brautomationtools.forceActivate',
		() => {});
	context.subscriptions.push(disposable);
	// Command: Update configuration of installed AS versions from file system search
	disposable = vscode.commands.registerCommand('vscode-brautomationtools.updateAvailableAutomationStudioVersions',
		BREnvironment.updateAvailableAutomationStudioVersions);
	context.subscriptions.push(disposable);
    //#endregion Commands accessible in UI by using Ctrl+Shift+P
    
    //#region Commands for dialogs, so they can be used in tasks...
	// Dialog command: select AS project files
	disposable = vscode.commands.registerCommand('vscode-brautomationtools.dialogSelectAsProjectFile',
		BRDialogs.selectAsProjectFile);
	context.subscriptions.push(disposable);
	// Dialog command: select project configuration
	disposable = vscode.commands.registerCommand('vscode-brautomationtools.dialogSelectASProjectConfiguration',
		BRDialogs.selectASProjectConfiguration);
	context.subscriptions.push(disposable);
	// Dialog command: select build mode
	disposable = vscode.commands.registerCommand('vscode-brautomationtools.dialogSelectBuildMode',
		BRDialogs.selectBuildMode);
	context.subscriptions.push(disposable);
	//#endregion Commands for dialogs, so they can be used in tasks...
}