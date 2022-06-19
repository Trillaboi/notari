import "./App.css";
import axios from "axios";
import React, {useState} from "react";
import { userSession } from "./session";
import { useConnect } from "@stacks/connect-react";
import { ConnectWallet } from "./components/ConnectWallet";

function App() {
  const [balance, setBalance] = useState(0);
  const { doContractCall } = useConnect();
  const signedIn = userSession.isUserSignedIn();
  const principal = "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM"
  const getBalance = () => {axios.get(`http://localhost:3999/extended/v1/address/${principal}/balances`).then(response => {
    console.log(response)
    setBalance(response.data.stx.balance);
  })
  }
  return (
    <>
    <div className="Background">
    <div className="relative flex flex-col items-center min-h-screen">
      <button onClick={getBalance}>Get Balance</button>
      {balance}
    {/* {signedIn ? "" : <ConnectWallet />} */}
    </div>
    </div>
    </>
  );
}

export default App;
