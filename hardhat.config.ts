require("dotenv").config();
require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
    hardhat: {
      chainId: 1000,
    },
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/QniA4GDH1vzg9kVJ8YgZwB3btT0lPwAs",
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
  },
};
