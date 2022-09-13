const hre = require("hardhat");

async function main(){
  const [deployer] = await hre.ethers.getSigners();
  console.log(`deploying new votes contracts with ${deployer.address}`);
  const voteContract = await hre.ethers.getContractFactory("votes");
  const votes = await voteContract.deploy();

  await votes.deployed();

  console.log("The new votes contract has been deployed to : ",votes.address);
};
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
  //info from the deployment
  /**
   * deploying new votes contracts with 0x86393e30A3638909B2197D13a14d27Ba0ce897c2
   * The new votes contract has been deployed to :  0xaD532a9CedAFA61e14Eea78Bf324Bebe56EEEd5E
   */