import { connectWallet } from "./wallet";
import { ethers } from "ethers";

export async function storeAttestation(user, reportHashText, verdict) {
  const { contract } = await connectWallet();
  const reportHash = ethers.utils.formatBytes32String(reportHashText);
  const tx = await contract.storeAttestation(user, reportHash, verdict);
  await tx.wait();
}

export async function transferFunds(tokenAddress, amountText) {
  const { contract } = await connectWallet();
  const amount = ethers.utils.parseUnits(amountText, 18);
  const tx = await contract.transferFunds(tokenAddress, amount);
  await tx.wait();
}

export async function pauseContract() {
  const { contract } = await connectWallet();
  const tx = await contract.pause();
  await tx.wait();
}

export async function resumeContract() {
  const { contract } = await connectWallet();
  const tx = await contract.resume();
  await tx.wait();
}

export async function getContractInfo() {
  const { contract } = await connectWallet();
  return await contract.getContractInfo();
}

export async function getComplianceMessage() {
  const { contract } = await connectWallet();
  return await contract.getComplianceMessage();
}

export async function verifyComplianceSignature(user, signature) {
  const { contract } = await connectWallet();
  return await contract.verifyComplianceSignature(user, signature);
}

export async function storeVerifiedAttestation(user, signature, reportHashText, verdict) {
  const { contract } = await connectWallet();
  const reportHash = ethers.utils.formatBytes32String(reportHashText);
  const tx = await contract.storeVerifiedAttestation(user, signature, reportHash, verdict);
  await tx.wait();
}

export async function getAttestation(user) {
  const { contract } = await connectWallet();
  return await contract.getAttestation(user);
    }
