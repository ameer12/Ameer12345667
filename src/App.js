import React from "react";
import {
  storeAttestation,
  transferFunds,
  pauseContract,
  resumeContract,
} from "./functions";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Asset Manager UI</h2>
      <button onClick={storeAttestation}>Store Attestation</button>
      <button onClick={transferFunds}>Transfer Funds</button>
      <button onClick={pauseContract}>Pause</button>
      <button onClick={resumeContract}>Resume</button>
    </div>
  );
}

export default App;
