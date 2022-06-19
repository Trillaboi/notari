
import React from "react";
import { Text } from "@blockstack/ui";
import { useConnect } from "@stacks/connect-react";
import { bufferCVFromString } from "@stacks/transactions";
// import { CONTRACT_ADDRESS, CONTRACT_NAME } from "../assets/constants";

export const callFunction = ({ userSession }) => {
    const { doContractCall } = useConnect();
    const { username } = userSession.loadUserData();
    const CONTRACT_ADDRESS = "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM"
    const CONTRACT_NAME = "my-nft"
    const register = () => {
      // do the contract call
      doContractCall({
        contractAddress: CONTRACT_ADDRESS,
        contractName: CONTRACT_NAME,
        functionName: "claim",
        functionArgs: [],
        onFinish: (data) => {
          console.log({ data });
        },
      });
    };
}