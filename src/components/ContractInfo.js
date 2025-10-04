import React, { useState } from "react";
import { getContractInfo } from "../functions";

function ContractInfo() {
  const [info, setInfo] = useState(null);

  const handleClick = async () => {
    const result = await getContractInfo();
    setInfo(result);
  };

  return (
    <div>
      <h4>Contract Info</h4>
      <button onClick={handleClick}>Get Info</button>
      {info && (
        <p>
          Address: {info[0]} <br />
          Owner: {info[1]}
        </p>
      )}
    </div>
  );
}

export default ContractInfo;
