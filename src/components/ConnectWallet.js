import React from "react";
import { useConnect } from "@stacks/connect-react";


export function ConnectWallet({setUser}) {
    const connect = useConnect();
    return (
      <button
        onClick={() => {
          connect.doAuth()
          setUser(true)
        }
      }
      >
        Connect Wallet
      </button>
    );
  }
  