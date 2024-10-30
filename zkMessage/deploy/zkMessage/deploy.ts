import { deployContract, getWallet } from "../../utils";
import { parseEther } from "ethers";
import { ethers } from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";

export default async function (hre: HardhatRuntimeEnvironment) {
  console.log("Starting deployment...");
  const contractArtifactName = "zkMessage";
  const zkMessage = await deployContract(contractArtifactName);

  console.log(`🏭 zkMessage address: ${zkMessage.target}`);

  const contractArtifact = await hre.artifacts.readArtifact(
    "zkMessage"
  );
  const contract = new ethers.Contract(
    zkMessage.target,
    contractArtifact.abi,
    getWallet()
  );
