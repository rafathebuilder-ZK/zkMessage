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

  // Define the factory parameters
	//const token = "0x69e5DC39E2bCb1C17053d2A4ee7CAEAAc5D36f96"
	//const cap = parseEther("1000000");
   //	const cap = ethers.utils.parseEther("1000000");
	//const admin = getWallet();

  //console.log("Creating new ZkCappedMinter...");

  // Use the factory to create a new ZkCappedMinter
	//const createTx = await factoryContract.createMinter(token, admin, cap);
	//await createTx.wait()

  // Retrieve the address of the newly created CrowdfundingCampaign
  	//const Minter = await factoryContract.getMinters();
  	//const newMinterAddress = Minter[Minter.length - 1];

   //console.log(`🚀 New ZkCappedMinter deployed at: ${newMinterAddress}`);
  //console.log("✅ Deployment and minter creation complete!");

  // Define funding goal for the campaign, e.g., 0.1 ether
  // const fundingGoalInWei = ethers.parseEther("0.1").toString();

  // Use the factory to create a new CrowdfundingCampaign
  //const createTx = await factoryContract.createCampaign(fundingGoalInWei);
  //await createTx.wait();

  // Retrieve the address of the newly created CrowdfundingCampaign
  //const campaigns = await factoryContract.getCampaigns();
  //const newCampaignAddress = campaigns[campaigns.length - 1];

  //console.log(`🚀 New CrowdfundingCampaign deployed at: ${newCampaignAddress}`);
  // console.log("✅ Deployment and campaign creation complete!");
}
