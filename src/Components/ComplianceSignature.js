import React, { useState } from "react";
import {
  getComplianceMessage,
  verifyComplianceSignature,
  storeVerifiedAttestation,
} from "../functions";

function ComplianceSignature() {
  const [user, setUser] = useState("");
  const [signature, setSignature] = useState("");
  const [reportHash, setReportHash] = useState("");
  const [verdict, setVerdict] = useState("");
  const [message, setMessage] = useState("");

  const fetchMessage = async () => {
    const msg = await getComplianceMessage();
    setMessage(msg);
  };

  const verify = async () => {
    const valid = await verifyComplianceSignature(user, signature);
    alert(valid ? "Signature is valid" : "Invalid signature");
  };

  const store = async () => {
    await storeVerifiedAttestation(user, signature, reportHash, verdict);
    alert("Verified attestation stored");
  };

  return (
    <div>
      <h4>Compliance Signature</h4>
      <button onClick={fetchMessage}>Get Message</button>
      {message && <p>{message}</p>}
      <input
        placeholder="User address"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        placeholder="Signature"
        value={signature}
        onChange={(e) => setSignature(e.target.value)}
      />
      <input
        placeholder="Report hash"
        value={reportHash}
        onChange={(e) => setReportHash(e.target.value)}
      />
      <input
        placeholder="Verdict"
        value={verdict}
        onChange={(e) => setVerdict(e.target.value)}
      />
      <button onClick={verify}>Verify Signature</button>
      <button onClick={store}>Store Verified Attestation</button>
    </div>
  );
}

export default ComplianceSignature;
