import React, { useEffect } from "react";
import logo from "./logo.svg";

import "./App.css";
import { ApiClient } from "./ApiClient";

export const App: React.FC<{ apiClient: ApiClient }> = ({ apiClient }) => {
  useEffect(() => {
    fetch('http://localhost:3000/getFilesList').then((res) => {
    console.log('✅', res)
    }).catch((err) => {
      console.log('❌', err)

    })
    apiClient.getMediaList()
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};
