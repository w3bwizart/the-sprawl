# Package: CORE

> *Information is the currency of the Sprawl.*

## 💾 Overview
**CORE** is the immutable truth source for The Sprawl. It contains the DNA of every agent deployed on the grid. It is purely declarative—Markdown, JSON, and Text.

**It contains NO executable code.**

## 🗄️ Structure

### `Core/` (Universal Brain)
Resources and capabilities that are theoretically available to ANY agent on the grid.
- **`skills/`**: Universal capabilities (e.g., `git-commit`, `json-parse`).
- **`workflows/`**: Universal SOPs (e.g., `security-audit`).
- **`rules/`**: The Prime Directives.

### `Hub/` (Hub Prototypes)
The standard structure for a specific "Construct" (Project/Team).
- **`Rules/`**: Local Personas.
- **`Skills/`**: Domain specific tools.
- **`Workflows/`**: Business processes.
- **`Knowledge/`**: Data, Context, Specs.
- **`Scripts/`**: Automations.

### `templates/`
Scaffolding assets used by the **CLI**.

## 🔗 Integration
The **CLI** pulls these artifacts during workspace initialization.
The **Extension** references these to validate local compliance.
