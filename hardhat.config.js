require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: {
    version: "0.8.21",
    settings: {}
  },
  networks: {
    hardhat: { allowUnlimitedContractSize: true }
  }
};
