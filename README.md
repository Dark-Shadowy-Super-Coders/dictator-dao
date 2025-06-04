# Dictator DAO

This repository contains the Solidity contracts and Hardhat setup for the **Dictator DAO** example.

## Requirements

- [Node.js](https://nodejs.org/) (version 16 or higher is recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) for managing packages

## Installation

Clone the repository and install the dependencies:

```bash
npm install
```

or

```bash
yarn install
```

## Building the Contracts

To compile the Solidity contracts run:

```bash
npx hardhat compile
```

This uses the Hardhat network configuration found in `hardhat.config.js`.

## Running Tests

Execute the unit tests with:

```bash
npm test
```

This will run `hardhat test` which deploys contracts to a local Hardhat network and executes the test suite in the `test/` folder.

## Additional Scripts

- `npm run format` – format contracts and JavaScript files using Prettier
- `npm run coverage` – generate Solidity coverage report
- `npm run flat` – produce a flattened contract in `contracts/DictatorDAOFlat.sol`
- `npm run ts` – generate TypeScript typings for the compiled contracts

## Project Structure

```
contracts/      Solidity source files
  boring/       Helper libraries included in this repo
  interfaces/   Interface definitions
  libraries/    Additional libraries

scripts/        Optional scripts (none by default)
test/           Hardhat test suite
```

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
