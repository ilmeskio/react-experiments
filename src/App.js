import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Input from "./Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faEye } from "@fortawesome/free-solid-svg-icons";
import { useToggle } from "./customHooks";

function App() {
  const [focus, toggleFocus] = useToggle();
  const [visible, toggleVisible] = useToggle();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Input placeholder="Username" autofocus={focus} visible={visible} />
        <FontAwesomeIcon onClick={toggleFocus} icon={faSun} />
        <FontAwesomeIcon onClick={toggleVisible} icon={faEye} />
      </header>
    </div>
  );
}

export default App;
