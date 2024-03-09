import "./App.css";
import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./UI/Layout";
import React from 'react';

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout />
      </div>
    </BrowserRouter>
  );
};

export default App;
