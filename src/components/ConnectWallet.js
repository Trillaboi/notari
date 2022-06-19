import React from "react";
import { useConnect } from "@stacks/connect-react";


export function ConnectWallet({setUser, setSwitchy}) {
    const connect = useConnect();
    return (
      <div className="button-container">
        <button className ="claim-token-button cta-button"
          onClick={() => {
            connect.doAuth()
              setUser(true); 
          }
        }
        >
          Connect Wallet
        </button>
      </div>
    );
  }
  