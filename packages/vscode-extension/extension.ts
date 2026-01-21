import * as vscode from 'vscode';
import { exec } from 'child_process';
import * as path from 'path';
import * as os from 'os';

/**
 * The Sprawl: Grid Sync
 * Keeps the local agent constructs synchronized with the central grid.
 */
export function activate(context: vscode.ExtensionContext) {
    // 1. Status Bar Item
    const syncButton = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
    syncButton.command = 'sprawl.sync';
    syncButton.text = `$(sync) Sprawl Sync`;
    syncButton.tooltip = 'Sync Local Constructs with The Grid';
    syncButton.show();

    // 2. Command Implementation
    let disposable = vscode.commands.registerCommand('sprawl.sync', async () => {
        // Defaults to home directory, can be configured via settings in future
        const targetDir = path.join(os.homedir(), 'The_Sprawl_Constructs');

        vscode.window.withProgress({
            location: vscode.ProgressLocation.Notification,
            title: "Synchronizing with The Grid...",
            cancellable: false
        }, async (progress: vscode.Progress<{ message?: string; increment?: number }>) => {

            // TODO: Load this from a ~/.sprawl/config.json for true Loose Coupling
            progress.report({ message: `Contacting The Sprawl CLI...` });

            // Execute the CLI command 'sprawl sync'
            // We assume 'sprawl' is in the user's PATH (as per README instructions)
            const cmd = `sprawl sync`;

            await new Promise((resolve) => {
                exec(cmd, (err: Error | null, stdout: string, stderr: string) => {
                    if (err) {
                        console.error(stderr);
                        vscode.window.showErrorMessage(`Grid Sync Failed: ${stderr || err.message}`);
                        resolve(false);
                        return;
                    }
                    console.log(stdout); // Log CLI output
                    vscode.window.showInformationMessage('⚡ Grid Synchronization Complete.');
                    resolve(true);
                });
            });
        });
    });

    context.subscriptions.push(disposable, syncButton);
}

export function deactivate() { }
