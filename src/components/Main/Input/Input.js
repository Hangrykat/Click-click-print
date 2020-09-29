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
          <div className="input-panel-wrapper">
            <div className="input-panel">
              <div className="input-field">
                <TextInput />
                <div className="single-line-input">
                  <p>NFPA 704 Diamond</p>
                </div>
                <NFPA />
                <div className="single-line-input">
                  <p>Choose symbols:</p>
                </div>
                <SymbolsInput />                
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Input;
