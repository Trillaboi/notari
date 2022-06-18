import React from "react";
import { useConnect } from "@stacks/connect-react";


export function ConnectWallet() {
    const connect = useConnect();
    return (
      <button
        onClick={() => connect.doAuth()}
      >
        Connect Wallet
      </button>
    );
  }
  