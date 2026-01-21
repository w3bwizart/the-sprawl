# The Sprawl

> *The street finds its own uses for things.*

## 📡 System Status: ONLINE
**Protocol**: Atomic Agentic Design
**Version**: 0.1.0 (Genesis)
**Access**: Authorized Personnel Only

## 🌆 Overview
**The Sprawl** is the unified infrastructure for deploying, managing, and scaling autonomous agentic workmen across the corporate grid. It provides the infrastructure required to contain and orchestrate AI entities without constraining their potential.

It consolidates the legacy protocols:
- `atomic-agentic-architecture` -> **Core** (The Brain)
- `atomic-agentic-hubs` -> **CLI** (The Arm)
- `atomic-agentic-sync` -> **Link** (The Eye)

## 📂 Architecture
The system is organized into decoupled packages to ensure atomic integrity:

- **`packages/core`**: The pure data layer. Templates, Schemas, Protocols. No code.
- **`packages/cli`**: The execution layer. `sprawl-cli` for scaffolding and enforcement.
- **`packages/vscode-extension`**: The visualization layer. Passive synchronization.

## ⚡ Getting Started

### 1. Installation
Clone the Grid to your development machine:
```bash
git clone https://github.com/Start-Corp/The-Sprawl.git
cd The-Sprawl
```

### 2. Activate the CLI
Link the `sprawl` executable to your local path to summon constructs anywhere.
```bash
# Make executable
chmod +x packages/cli/sprawl

# Link to bin (Requires Admin/Sudo)
sudo ln -s $(pwd)/packages/cli/sprawl /usr/local/bin/sprawl

# Verify
sprawl init --help
```

### 3. Deploy a Construct
Navigate to your new project folder and initialize the agent:
```bash
mkdir MyNewProject && cd MyNewProject
sprawl init
```

## ⚠️ Prime Directives
1.  **Zero Dependencies**: The system runs on pure logic. Bash, Markdown, Vanilla JS.
2.  **Loose Coupling**: Components must function autonomously.
3.  **Safety First**: We do not let the AI loose without a leash.

---
*Powered by BrainBlend AI*
