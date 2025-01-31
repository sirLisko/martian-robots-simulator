# 7. Use of GitHub Actions

## Status

Accepted

## Context

The Martian Robots Simulator project requires a continuous integration (CI) pipeline to automate tasks such as linting, formatting, testing, and building.

A CI pipeline ensures that code changes are validated before being merged into the main branch, reducing the risk of introducing bugs or inconsistencies.

## Decision

Use **GitHub Actions** as the CI/CD platform.

## Consequences

- **Pros**:

  - **Native Integration**: GitHub Actions is tightly integrated with GitHub, making it easy to set up and manage workflows directly from the repository.
  - **Flexibility**: GitHub Actions supports a wide range of workflows, including linting, testing, building, and deploying.
  - **Extensibility**: GitHub Actions has a large ecosystem of pre-built actions and workflows, reducing the need to write custom scripts.
  - **Visibility**: Workflow statuses are displayed directly in the repository, making it easy to monitor the health of the codebase.

- **Cons**:

  - **Learning Curve**: Developers unfamiliar with GitHub Actions may need time to learn its syntax and features.
  - **Complexity**: For advanced workflows, configuration can become complex and require careful management.
