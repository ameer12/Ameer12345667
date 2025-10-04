import { ethers } from "ethers";
import abi from "./abi.json";

const contractAddress = "0xDFc8AE8F1D127f59292A7eC5deA52DDE0b9FFe91

export async function connectWallet() {
  if (!window.ethereum) {
    alert("Please install MetaMask");
    return null;
  }

  await window.ethereum.request({ method: "eth_requestAccounts" });
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, abi, signer);

  return { provider, signer, contract };
}
