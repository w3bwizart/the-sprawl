# Core Workflows Directory

## Goal
The `Core/workflows/` directory contains "Organisms" - multi-step Standard Operating Procedures (SOPs) that are triggered by the user. These are the "runbooks" for common tasks.

## What to Place Here
- Markdown files (`.md`) describing a sequence of steps.
- Files should capture best practices for complex processes.

## Examples of Tasks & Processes

1.  **New Hire**: Run `/company-info` (triggering `global-help.md`) to get an overview of the organization.
2.  **Sales Director**: Execute `Core/workflows/quarterly-review.md` to guide the agent through gathering metrics.
3.  **Project Manager**: Run `/init-project` which triggers a workflow to scaffold a new folder.
4.  **Content Creator**: Use `Core/workflows/blog-post-pipeline.md` to go from "Idea" -> "Draft" -> "Final Polish".
5.  **Finance Team**: Trigger `Core/workflows/audit-prep.md` to collect all necessary artifacts for auditors.
6.  **Developer**: Run `/deploy` (triggering `Core/workflows/deploy-checklist.md`) to ensure all tests pass before release.
7.  **Support Lead**: Use `Core/workflows/incident-response.md` to guide the team through an outage response.
8.  **HR Manager**: Run `Core/workflows/performance-review.md` to help draft constructive feedback.
9.  **Social Media Manager**: Execute `Core/workflows/content-calendar.md` to plan posts for the next month.
10. **Executive Assistant**: Run `Core/workflows/travel-plan.md` to finding flights and creating an itinerary.
