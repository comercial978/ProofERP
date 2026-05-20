const hre = require("hardhat");

async function main() {

  const ProofERP = await hre.ethers.deployContract("ProofERP");

  await ProofERP.waitForDeployment();

  console.log("ProofERP deployed to:", await ProofERP.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});