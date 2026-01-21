# Core Rules Directory

## Goal
The `Core/rules/` directory houses the "Prime Directives" of the agent. These are high-priority context files that define the agent's core personality, safety constraints, and operating boundaries.

## What to Place Here
- Markdown files (`.md`) defining behavioral rules.
- Files should be concise and focused (e.g., `SAFETY.md`, `TONE.md`).

## Examples of Tasks & Processes

1.  **Compliance Officer**: Upload `Core/rules/GDPR.md` to instruct the agent on how to handle data subject access requests.
2.  **Brand Manager**: Create `Core/rules/TONE_OF_VOICE.md` specifying that the agent should be "Professional yet Aproachable".
3.  **Security Lead**: Add `Core/rules/NO_SECRETS.md` instructing the agent to never output API keys or passwords.
4.  **Engineering Lead**: Define `Core/rules/CODE_STYLE.md` mandating that all generated web apps must use Vanilla JS.
5.  **PMO Director**: Implement `Core/rules/REPORT_FORMAT.md` ensuring all date formats are ISO 8601 (YYYY-MM-DD).
6.  **Sales Director**: Add `Core/rules/CUSTOMER_FIRST.md` to ensure the agent prioritizes customer benefits in generated emails.
7.  **Content Editor**: Update `Core/rules/GRAMMAR.md` to enforce Oxford Comma usage across all content.
8.  **DEI Officer**: Create `Core/rules/INCLUSIVITY.md` to flag and correct gendered language in job descriptions.
9.  **Finance Controller**: Add `Core/rules/DECIMAL_PRECISION.md` requiring all financial figures to be displayed with two decimal places.
10. **IT Support**: Add `Core/rules/OS_AWARENESS.md` so the agent always assumes the correct OS environment for shell commands.
