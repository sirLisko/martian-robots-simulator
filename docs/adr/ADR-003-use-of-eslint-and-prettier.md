# 3. Use of ESLint and Prettier

Date: 2025-01-31

## Status

Accepted

## Context

The Martian Robots Simulator project involves writing and maintaining a decent amount of TypeScript code. To ensure code quality, consistency, and readability, it is essential to enforce coding standards and automate formatting. Manual code reviews and formatting are error-prone and time-consuming.

## Decision

Use ESLint for linting and Prettier for code quality check and formatting.

## Consequences

- **Pros**:

  - **Code Quality**: ESLint enforces coding standards and catches potential issues (e.g., unused variables, incorrect types) early in the development process.

  - **Consistency**: Prettier ensures consistent code formatting across the entire codebase, eliminating debates over style preferences.

  - **Automation**: Both tools can be integrated into the development workflow (e.g., pre-commit hooks, CI/CD pipelines), reducing manual effort.

  - **Developer Experience**: ESLint and Prettier provide real-time feedback in IDEs, improving developer productivity.

  - **Community Support**: Both tools are widely adopted in the JavaScript/TypeScript ecosystem, with extensive documentation and plugins.

- **Cons**:

  - **Configuration Overhead**: Setting up ESLint and Prettier requires initial configuration, which can be time-consuming.

  - **Learning Curve**: Developers unfamiliar with these tools may need time to learn how to use them effectively.

  - **Tooling Conflicts**: ESLint and Prettier can sometimes conflict (e.g., formatting rules), requiring careful configuration to avoid issues.
