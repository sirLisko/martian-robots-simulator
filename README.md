# Martian Robots Simulator

Welcome to the Martian Robots Simulator! This project simulates the movement of robots on a grid-based representation of Mars. The robots follow a set of instructions (movements) and report their final position and status (e.g. whether they are lost).

## Architecture Decision Records

There is a [collection of ADRs](docs/adr) that document the decisions taken during development.

## Key Features

- **Grid-Based Simulation**:

  Robots move on a grid defined by its width and height.

  The grid is represented as a string (e.g., "5 3").

- **Robot Movement**:

  Robots can move forward (F), turn left (L), or turn right (R).

  Robots can be lost if they move off the grid.

- **Scent Tracking**:

  If a robot is lost, it leaves a scent on the grid to prevent other robots from being lost in the same location.

## How to Run

1. **Prerequisites**:

   Ensure you have [Node.js](https://nodejs.org/) (v. 20.18) installed.

   If you [NVM](https://github.com/nvm-sh/nvm) installed you can run

   ```bash
   nvm use
   ```

   to have the correct version of Node.

2. **Clone the repository**:

   ```bash
   git clone https://github.com/sirLisko/martian-robots-simulator.git
   cd martian-robots-simulator
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Run the simulation**:

   ```bash
   npm run build
   npm start
   ```

5. **Run the simulation (DEV mode)**:

   ```bash
   npm run dev
   ```

## Linting, Formatting, and Testing

This project uses **ESLint**, **Prettier**, and **Vitest** to ensure code quality, consistency, and correctness. The following commands are available:

- `npm run lint`: Run ESLint to check for issues.
- `npm run format`: Format all files using Prettier.
- `npm run format:check`: Check if files are formatted correctly.
- `npm test`: Run unit tests using Vitest.

### GitHub Actions

A GitHub Actions workflow runs on every push and pull request to ensure that:

- The code passes ESLint checks.

- The code is formatted according to Prettier rules.

- The code passes the unit tests.

## The stack

- **Runtime**: Node.js (v. 20.18) for running the simulation and CLI.
- **Language**: TypeScript for type safety and better developer experience.
- **Validation**: Zod for robust input validation.
- **Linting and Formatting**: ESLint and Prettier for consistent code quality and style.
- **Testing**: Unit tests with Vitest and integration tests for the CLI.
- **CLI Interaction**: prompts for interactive command-line input.
- **CI/CD**: GitHub Actions for automating linting, formatting, and testing.

## Improvements

- Add more unit tests, especially including more edge cases and error scenarios.
- Add integration tests to ensure the CLI works properly, at the moment there is a test mocking the `prompts` library.
- Improve error handling and messages, now there is a generic message per input.
- Generate API documentation, using for example TypeDoc, for all the modules.
- Add an help functionality for the CLI.
- Add pre-commit/pre-push validation using [Husky](https://github.com/typicode/husky)

  - enforce conditional commit syntax
  - prevent to break the pipelines if the checks are not passing in local

- Probably I am forgetting a bunch of them :-)
