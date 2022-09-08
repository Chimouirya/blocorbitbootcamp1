require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  defaultNetwork: "matic",
  networks: {
    hardhat: {
    },
    matic: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: ['af56ef2dc156b586756c9cbe835ea0a408be9f5c5ff8cead6692b179461fe50e']
    }
  },
  etherscan: {
    apiKey: '48G6NYZCX7H2BT9Y2PHQCIVBGTC273UEB6'
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
}