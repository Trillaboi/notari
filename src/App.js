import "./App.css";
<<<<<<< HEAD
import React from "react";
import { ConnectWallet } from "./components/ConnectWallet";
import { userSession } from "./session";
=======
import axios from "axios";
import React, {useState} from "react";
import { userSession } from "./session";
// import { StacksTestNet } from "@stacks/network";
import { useConnect } from "@stacks/connect-react";
// import { ConnectWallet } from "./components/ConnectWallet";
>>>>>>> trash

function App() {
  const signedIn = userSession.isUserSignedIn();
<<<<<<< HEAD

  return (
    <>
    <div className="Background"></div>
    {signedIn ? "" : <ConnectWallet />}
      
=======
  const principal = "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM"

  const getBalance = () => {axios.get(`http://localhost:3999/extended/v1/address/${principal}/balances`).then(response => {
    console.log(response)
    setBalance(response.data.stx.balance)})
  }
  
  const CONTRACT_ADDRESS = "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM"
  const CONTRACT_NAME = "my-nft"
    

  const claim = async () => {
    await doContractCall({
      contractAddress: CONTRACT_ADDRESS,
        contractName: CONTRACT_NAME,
        functionName: "claim",
        functionArgs: [],
        onFinish: (data) => {
          console.log({ data });
        }
    })
  }

  return (
    <>
    <div className="Background">
    <div className="relative flex flex-col items-center min-h-screen">
      <button onClick={getBalance}>Get Balance</button>
      <button onClick={claim}>Claim</button>
      {/* {balance} */}
     {/* {signedIn ? "" : <ConnectWallet />} */}
    </div>
    </div>
>>>>>>> trash
    </>
  );
}

export default App;
