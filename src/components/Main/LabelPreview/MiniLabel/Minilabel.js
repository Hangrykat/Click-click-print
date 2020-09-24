import React, { useContext } from "react";
import { StateContext } from "../../../../context";
import "./MiniLabel.css";
import { Textfit } from "react-textfit";

function MiniLabel({ label }) {
  const { setLabel, setHazardousSymbols } = useContext(StateContext);
  function selectLabel(elem) {
    setLabel(elem);
    setHazardousSymbols(elem.symbols);
  }
  function showSymbol(symbol) {
    return (
      <div className="minisymbol">
        <img
          src={require(`../../../../assets/symbols/${symbol}.jpg`)}
          alt="Symbol"
        />
      </div>
    );
  }
  return (
    <div className="minilabel-wrapper" onClick={() => selectLabel(label)}>
      <div className="minilabel">
        <div className="minilabel-sheet">
          <div className="flex-center minipadding">
            <Textfit mode="multi" className="minititle-blackBG">
              {label.productName} ({label.chemicalFormula})
            </Textfit>
          </div>
          <div className="minidescription-container">
            <div className="minilabel-text">Date:</div>
            <div className="minilabel-text">Expiry Date:</div>
            <div className="minilabel-text">Description:</div>
            <div className="minilabel-text">Name/ID No:</div>
            <div className="minilabel-text">Contact:</div>
          </div>
        </div>
        <div className="minilabel-sheet">
          <div className="title-minilabel">Hazardous Symbols</div>
          <div className="flex-center margin minisymbol-wrapper">
            {label.symbols ? label.symbols.map((elem) => showSymbol(elem)) : ""}
          </div>
          <div id="diamond" className="warning-diamond">
            <p className="NFPAtitle">Warning Diamond</p>
            <div className="diamond-wrapper">
              <img
                className="miniNFPA"
                src={require("../../../../assets/symbols/NFPA_704.svg")}
                alt="NFPA 704 symbol"
              ></img>
              <div className="redIndex">{label.NFPA.redIndex}</div>
              <div className="blueIndex">{label.NFPA.blueIndex}</div>
              <div className="yellowIndex">{label.NFPA.yellowIndex}</div>
              <div className="whiteIndex">{label.NFPA.whiteIndex}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniLabel;
