import React from 'react';
import ReactDOM from 'react-dom/client';
import { Buffer } from "buffer/";
import App from './App';
import { Connect } from "@stacks/connect-react";
import { userSession } from "./session";

global["Buffer"] = Buffer;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Connect  
    authOptions={{
      appDetails:{
        name: "Notari",
        icon: window.location.origin + "/N.svg",
      },
      redirectTo:"/",
      onFinish: () => {
        window.location.reload();
      },
      userSession,
  }}
  >
    <App />
  </Connect>
 
);
