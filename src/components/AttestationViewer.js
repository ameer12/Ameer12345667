import React, { useState } from "react";
import { getAttestation } from "../functions";

function AttestationViewer() {
  const [user, setUser] = useState("");
  const [attestation, setAttestation] = useState(null);

  const handleClick = async () => {
    const result = await getAttestation(user);
    setAttestation(result);
  };

  return (
    <div>
      <h4>View AML Report</h4>
      <input
        placeholder="User address"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button onClick={handleClick}>Get Attestation</button>
      {attestation && (
        <p>
          Hash: {attestation[0]} <br />
          Verdict: {attestation[1]} <br />
          Timestamp: {attestation[2].toString()}
        </p>
      )}
    </div>
  );
}

export default AttestationViewer;
