# 4. Modularisation of the Codebase

Date: 2025-01-31

## Status

Accepted

## Context

The current codebase is structured as a single monolithic module, which makes it difficult to extend, test, and maintain.

The test file mentions:

> "There is also a possibility that additional command types may be required in the future and provision should be made for this."

## Decision

The codebase has been modularise into smaller, self-contained modules with clear responsibilities. This will:

- Improve **extensibility** by making it easier to add new features (e.g., new command types or directions).

- Improve **testability** by allowing isolated unit tests for each module.

- Improve **maintainability** by reducing coupling between components.

As an example, the `DIRECTIONS` array in `constants.ts` will be modularised, making it easier to extend in the future (e.g., adding new directions like "`NE`" or "`SW`").

## Alternatives Considered

**Monolithic Structure**:

Keep the codebase as a single module.

- **Pros**: Simpler initial implementation.
- **Cons**: Harder to extend, test, and maintain.

## Conclusion

Modularising the codebase is the best approach to ensure extensibility, testability, and maintainability.

The example of DIRECTIONS demonstrates how modularisation makes it easier to extend the codebase in the future.

This decision aligns with the requirement to "make provision for additional command types in the future."
