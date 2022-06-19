import React from "react";
import { useConnect } from "@stacks/connect-react";


export function ConnectWallet() {
    const connect = useConnect();
    return (
      <button
      className="mb-16 Button px-2 py-1 bg-purple-600 text-purple-50 font-semibold rounded-md"
        onClick={() => connect.doAuth()}
      >
        Connect Wallet
      </button>
    );
  }
  