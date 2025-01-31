# 8. Use of Zod for Input Validation

Date: 2025-01-31

## Status

Accepted

## Context

The Martian Robots Simulator requires robust input validation to ensure that user-provided data (e.g., grid size, robot position, movements) adheres to specific constraints:

1. **Grid coordinates must be ≤ 50**.
2. **Instruction strings must be < 100 characters**.
3. **Positions must follow the format `<number> <number> <direction>`**.

Manual validation is error-prone and difficult to maintain, especially as the project grows. A type-safe, declarative validation library is needed to enforce these constraints consistently.

## Decision

Use [**Zod**](https://zod.dev/) for input validation in the Martian Robots Simulator.

## Consequences

- **Pros**:

  - **Type Safety**: Zod integrates seamlessly with TypeScript, ensuring that validated inputs are type-safe.
  - **Declarative Validation**: Zod allows you to define validation schemas in a clear and concise way, making the code easier to read and maintain.
  - **Custom Error Messages**: Zod supports custom error messages, providing meaningful feedback to users when validation fails.
  - **Reusability**: Zod schemas can be reused across the application, ensuring consistent validation logic.
  - **Extensibility**: Zod supports complex validation scenarios (e.g., conditional validation, chaining) and can be extended with custom validation logic.

- **Cons**:

  - **Learning Curve**: Developers unfamiliar with Zod may need time to learn its syntax and features.
  - **Dependency**: Adds an external dependency to the project.
