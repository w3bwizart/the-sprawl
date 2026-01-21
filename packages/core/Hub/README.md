# Hub Directory

## Goal
The `Hub/` directory acts as the **Hub Source** for the Hub system. Unlike the Core brain, which is universal, the Hub contains specialized knowledge, skills, and personas that are selectively "injected" into specific hubs based on configuration.

## What to Place Here
- **Rules**: Domain-specific personas (e.g., `finance-auditor.md`) that shouldn't be active everywhere.
- **Skills**: Specialized "Expert Molecules" (e.g., `jira-connector`, `salesforce-lookup`).
- **Workflows**: Business-specific "Organisms" (e.g., `monthly-report.md`).
- **Knowledge**: Reference blueprints (e.g., `api-specs.json`).
- **Scripts**: Raw executables and helpers.

## Examples of Tasks & Processes

1.  **Hub Administrator**: Configure `package.md` in the Finance Hub to pull `Hub/Rules/finance-auditor.md`.
2.  **Sales Ops**: Add `Hub/Skills/outreach-sequencer/` so only Sales Hub agents can automate outreach.
3.  **Project Manager**: Update `Hub/Workflows/init-office.md` to change the default structure for new projects.
4.  **Compliance Team**: Add `Hub/Rules/banking-regulations.md` for hubs dealing with financial data.
5.  **Data Engineer**: Update `Hub/Knowledge/database-schema.md` to reflect the latest table structure.
6.  **HR**: Add `Hub/Workflows/interview-process.md` for Recruitment Hubs.
7.  **Marketing**: Create `Hub/Rules/brand-voice-gen-z.md` for a specific campaign hub.
8.  **Developer**: Update `Hub/Scripts/deploy-to-cloud.sh` to fix a bug in the deployment script.
9.  **Support Admin**: Add `Hub/Skills/zendesk-api/` to allow support agents to read tickets.
10. **Executive**: Update `Hub/Workflows/board-report.md` to standardize the monthly report format.
