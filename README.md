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

   - Ensure you have [Node.js](https://nodejs.org/) installed.

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
   npm start
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
