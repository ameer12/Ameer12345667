import React from "react";
import ContractInfo from "./components/ContractInfo";
import AttestationViewer from "./components/AttestationViewer";
import ComplianceSignature from "./components/ComplianceSignature";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Asset Manager UI</h2>
      <ContractInfo />
      <AttestationViewer />
      <ComplianceSignature />
    </div>
  );
}

export default App;
