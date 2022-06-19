import "./App.css";
import React from "react";
import { ConnectWallet } from "./components/ConnectWallet";
import { userSession } from "./session";

function App() {
  const signedIn = userSession.isUserSignedIn();

  return (
    <>
    <div className="Background"></div>
    {signedIn ? "" : <ConnectWallet />}
      
    </>
  );
}

export default App;
