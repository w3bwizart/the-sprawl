# The Sprawl

> *The street finds its own uses for things.*

## 📡 System Status: ONLINE
**Protocol**: Atomic Agentic Design
**Version**: 0.1.0 (Genesis)
**Access**: Authorized Personnel Only

## 🌆 Overview
**The Sprawl** (Internal ID: The Grid) is the company-wide infrastructure for organizing your AI Agents.

Think of it as the **Operating System** for your AI work.
Instead of every department building their own random folders and prompts, everyone uses **The Sprawl** to ensure:
1.  **Safety**: All agents follow the same security rules.
2.  **Consistency**: Everyone uses the same folder structure.
3.  **Updates**: When the core team updates a rule, everyone gets it.

It brings together these legacy tools:
- `architecture` -> **Core** (The Brain: Rules, Skills, Templates)
- `hubs` -> **CLI** (The Builder: Scaffolds new projects)
- `sync` -> **Extension** (The Link: Updates your projects from the central Brain)

## 📂 Architecture
The system is organized into decoupled packages to ensure atomic integrity:

- **`packages/core`**: The pure data layer. Templates, Schemas, Protocols. No code.
- **`packages/cli`**: The execution layer. `sprawl-cli` for scaffolding and enforcement.
- **`packages/vscode-extension`**: The visualization layer. Passive synchronization.

## ⚡ Getting Started

### 1. Corporate Installation (Recommended)
This sets up the hidden Core and the visible Hubs folder automatically.

```bash
git clone https://github.com/Start-Corp/The-Sprawl.git
cd The-Sprawl
./install.sh
```

### 2. Manual Installation (Dev Mode)
If you prefer to link manually:
```bash
# Make executable
chmod +x packages/cli/sprawl

# Link to bin (Requires Admin/Sudo)
sudo ln -s $(pwd)/packages/cli/sprawl /usr/local/bin/sprawl

# Verify
sprawl init --help
```

### 3. Deploy a Construct (Example)
**Scenario**: You are a Marketing Manager and want to start using AI to write posts.

1.  **Create your folder**:
    *   Go to your Hubs directory: `cd ~/Documents/SprawlHubs`
    *   Create the hub: `mkdir Marketing-Hub && cd Marketing-Hub`
2.  **Initialize the Agent**:
    ```bash
    sprawl init "Marketing Hub"
    ```
    *   *System Response*: `[OK] Construct Ready: Marketing Hub`
3.  **Wake Up the Agent**:
    *   Open this folder in your IDE (Antigravity).
    *   Open **Agent Manager** (Cmd+L).
    *   Type `/init` and press Enter.
    *   *Result*: The Agent will read your new Rules and default Skills.

### 4. Advanced: Using Packages
You can pre-define what your hub needs using a `package.md` file.

1.  Create `package.md` in your empty folder:
    ```yaml
    rule: finance-auditor
    skill: jira-connector
    workflow: monthly-report
    ```
2.  Run `sprawl init "Finance Hub"`.
3.  The CLI will automatically pull those specific rules and skills from the Core.

### 5. Uninstall (The Burn Protocol)
To completely wipe The Sprawl from your system (Core, Hubs, and CLI):

```bash
sprawl burn
```
*Warning: This is irreversible.*

## ⚠️ Prime Directives
1.  **Zero Dependencies**: The system runs on pure logic. Bash, Markdown, Vanilla JS.
2.  **Loose Coupling**: Components must function autonomously.
3.  **Safety First**: We do not let the AI loose without a leash.

---
*Powered by BrainBlend AI*
