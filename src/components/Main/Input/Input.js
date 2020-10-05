import React from "react";
import "react-dropdown/style.css";

import "./Input.css";
import "../../../shared-styles.css";

import SymbolsInput from "./SymbolsInput/SymbolsInput";
import TextInput from "./TextInput/TextInput";
import NFPA from "./NFPA/NFPA";

function Input() {
  return (
    <div className="panel-container">
      <div className="main-bg-wrapper">
        <form id="label-info" className="secondary-bg-wrapper">
          <div className="title-big">Step 1: Enter label information</div>
          <div className="">
            <TextInput />
            <div className="title-small">NFPA Index</div>

            <NFPA />
            <div className="title-small">Hazard Symbols</div>
            <SymbolsInput />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Input;
