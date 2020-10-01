import React from "react";
import "./Label.css";

function Label({ label }) {
  function showSymbol(symbol) {
    return (
      <div className="symbol">
        <img
          src={require(`../../../../assets/symbols/${symbol}.svg`)}
          alt="Symbol"
        />
      </div>
    );
  }
  return (
      <div className="label-wrapper">
        {/*<div className="label">*/}
          {/*<div className="label-sheet">*/}
            {/*<div className="flex-center padding">*/}
              <div className="title-blackBG">
                {label.productName} ({label.chemicalFormula})
              </div>
            {/*</div>*/}
            <div className="flex-center">
              <div className="description-container">
                <div className="flex">
                  <div className="question">
                    <div className="label-text">Date:</div>
                    <div className="label-text">Expiry Date:</div>
                    <div className="label-text">Description:</div>
                    <div className="label-text">Name/ID:</div>
                    <div className="label-text">Contact:</div>
                  </div>
                  <div className="answer">
                  <div className="label-text">{label.date}</div>
                    <div className="label-text">{label.eDate}</div>
                    <div className="label-text">{label.description}</div>
                    <div className="label-text">{label.owner}</div>
                    <div className="label-text">{label.contactInfo}</div>
                  </div>
                </div>
              </div>
              <div id="diamond" className="warning-diamond">
                <div className="diamond-wrapper">
                  <img
                    className="NFPA"
                    src={require("../../../../assets/NFPAsymbols/NFPA_704.svg")}
                    alt="NFPA 704 symbol"
                  ></img>
                  <div className="redIndex">{label.NFPA.redDiamond}</div>
                  <div className="blueIndex">{label.NFPA.blueDiamond}</div>
                  <div className="yellowIndex">{label.NFPA.yellowDiamond}</div>
                  <div className="whiteIndex">{label.NFPA.whiteDiamond}</div>
                </div>
              </div>
            </div>
          {/*</div>*/}
          {/*<div className="label-sheet">*/}
            {/*<div className="title-label">Hazardous Symbols*/}
            <div className="flex-center margin symbol-wrapper">
              {label.symbols
                ? label.symbols.map((elem) => showSymbol(elem))
                : ""}
            </div>
            
          {/*</div>*/}
        {/*</div>*/}
      </div>
  );
}

export default Label;
