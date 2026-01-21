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
            const fleetRepos: string[] = [
                // "https://github.com/Start-Corp/finance-construct.git",
                // "https://github.com/Start-Corp/marketing-construct.git"
            ];

            if (fleetRepos.length === 0) {
                vscode.window.showInformationMessage('No active constructs found in configuration.');
                return;
            }

            for (const repo of fleetRepos) {
                const folderName = path.basename(repo, '.git');
                const fullPath = path.join(targetDir, folderName);

                progress.report({ message: `Syncing ${folderName}...` });

                const gitCmd = `git clone ${repo} ${fullPath} || (cd ${fullPath} && git pull)`;

                await new Promise((resolve) => {
                    exec(gitCmd, (err: Error | null) => {
                        if (err) {
                            vscode.window.showErrorMessage(`Sync Error: ${err.message}`);
                        }
                        resolve(true);
                    });
                });
            }

            vscode.window.showInformationMessage('⚡ Grid Synchronization Complete.');
        });
    });

    context.subscriptions.push(disposable, syncButton);
}

export function deactivate() { }
