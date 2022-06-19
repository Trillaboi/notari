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
            
          }
        }
    })
  }

  useEffect(() => {
    if (user) {
      console.log(user);
    }
  }, [user])

  const renderNotConnectedContainer = () => (
    <ConnectWallet setUser={setUser}/>
  )

  const renderConnectedContainer = () => (
    <div>
     <button onClick={claim}>Claim</button>
    </div>
  )

  return (
    <>
    <div className="Background">
    <div className="relative flex flex-col items-center min-h-screen">
      {/* <button onClick={getBalance}>Get Balance</button> */}
      {/* {balance} */}
     {user ? renderNotConnectedContainer() : renderConnectedContainer()}
    </div>
    </div>
    </>
  );
}

export default App;

