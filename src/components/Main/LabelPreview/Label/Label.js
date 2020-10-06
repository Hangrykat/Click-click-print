import React from "react";

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
      <div className="title-blackBG">
        {label.productName} ({label.chemicalFormula})
      </div>
      <div className="flex-center">
        <div className="description-container">
          <div className="grid1">Name/ID:</div>
          <div className="grid2">Contact:</div>
          <div className="grid3">Description:</div>
          <div className="grid4">Date:</div>
          <div className="grid5">Expiry Date:</div>
          <div className="grid6">{label.owner}</div>
          <div className="grid7">{label.contactInfo}</div>
          <div className="grid8 word-wrap">{label.description}</div>
          <div className="grid9">{label.date}</div>
          <div className="grid10">{label.eDate}</div>
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
            <div
              className={
                label.NFPA.whiteDiamond.length < 3
                  ? "whiteIndex normalSize"
                  : "whiteIndex smallSize"
              }
            >
              {label.NFPA.whiteDiamond}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-center symbol-wrapper">
        {label.symbols ? label.symbols.map((elem) => showSymbol(elem)) : ""}
      </div>
    </div>
  );
}

export default Label;
