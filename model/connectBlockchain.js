const { ethers } = require("ethers");
const connectBlockchain=()=>{
          const etherScan = ethers.providers.EtherscanProvider("homestead",'48G6NYZCX7H2BT9Y2PHQCIVBGTC273UEB6');
          const abi = [{"inputs":[],"name":"getUserName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"newUserName","type":"string"}],"name":"setUserName","outputs":[],"stateMutability":"nonpayable","type":"function"}]
}