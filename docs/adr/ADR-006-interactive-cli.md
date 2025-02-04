# 6. Interactive CLI

Date: 2025-01-31

## Status

Accepted

## Context

The Martian Robots Simulator requires user inputs for the grid, robot position, and movements.

A command-line interface (CLI) would make the application more interactive, user-friendly, and fun.

## Decision

The codebase has been modularise into smaller, self-contained modules with clear responsibilities. Use the prompts library to create an interactive CLI for the Martian Robots Simulator. The CLI will:

1. Prompt the user for the grid size, robot position, and movements.

2. Validate inputs to ensure they are in the correct format.

3. Call the createMission factory function to deploy the robot and display the result.

## Consequences

- **Pros**:

  - Provides a user-friendly way to interact with the simulator.

  - Validates inputs to ensure they are in the correct format.

  - Integrates seamlessly with the existing factory function and robot deployment logic.

- **Cons**:

  - Adds a dependency on the prompts library.

  - Requires additional code for input validation and error handling.

  - A level of complexity in writing unit tests
