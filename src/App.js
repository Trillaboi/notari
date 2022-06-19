import "./App.css";
import axios from "axios";
import React, {useState, useEffect} from "react";
import { userSession } from "./session";
import { StacksTestnet } from "@stacks/network";
import { useConnect } from "@stacks/connect-react";
import { ConnectWallet } from "./components/ConnectWallet";

function App() {
  const [balance, setBalance] = useState(0);
  const [user, setUser] = useState(false);
  const [switchy, setSwitchy] = useState(true);
  const { doContractCall } = useConnect();
  const principal = "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM"
  const getBalance = () => {axios.get(`http://localhost:3999/extended/v1/address/${principal}/balances`).then(response => {
    console.log(response)
    setBalance(response.data.stx.balance)})
  }
  
  const CONTRACT_ADDRESS = "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM"
  const CONTRACT_NAME = "my-nft"
  
  const network = new StacksTestnet({url: "http://localhost:3999"});

  const claim = async () => {
    await doContractCall({
      network,
      contractAddress: CONTRACT_ADDRESS,
        contractName: CONTRACT_NAME,
        functionName: "claim",
        functionArgs: [],
        onFinish: (data) => {
          if (data.txId) {
            console.log(data.txId)
            setSwitchy(false);
              // <p>Hello world</p> 
            
          }
        }
    })
  }

  // useEffect(() => {
  //   setUser(false)
  // }, [])

  const renderNotConnectedContainer = () => (
    <ConnectWallet setUser={setUser} setSwitchy={setSwitchy}/>
  )

  const renderConnectedContainer = () => (
    <div className="button-container">
     <button className ="claim-token-button cta-button" onClick={claim}>Claim</button>
    </div>
  )

  return (
    <>
    <div className="Background">
      <div className="container">
        <div className="relative flex flex-col items-center min-h-screen">
          {/* <button onClick={getBalance}>Get Balance</button> */}
          <img src="https://media.giphy.com/media/YSr5LJD2elcu6jHI9Z/giphy.gif" alt="open"/>
          {switchy && !user ? renderNotConnectedContainer() : renderConnectedContainer()}
        </div>
      </div>
    </div>
    </>
  );
}

export default App;

