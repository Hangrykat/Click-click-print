import React, { useContext } from "react";
import { StateContext } from "../../../../context";

function MiniLabel({ label }) {
  const { setLabel } = useContext(StateContext);
  function showSymbol(symbol) {
    return (
      <div className="symbol">
        <img
          src={require(`../../../../assets/symbols/${symbol}.jpg`)}
          alt="Symbol"
        />
      </div>
    );
  }
  return (
    <div className="preview-panel" onClick={() => setLabel(label)}>
      <div className="label-wrapper">
        <div className="label">
          <div className="label-sheet">
            <div className="flex-center padding">
              <div className="title-blackBG">
                {label.productName} ({label.chemicalFormula})
              </div>
            </div>
            <div className="description-container">
              <div className="label-text">Date:{label.date}</div>
              <div className="label-text">Expiry Date:{label.eDate}</div>
              <div className="label-text">Description:{label.description}</div>
              <div className="label-text">Name/ID No:{label.owner}</div>
              <div className="label-text">Contact:{label.contactInfo}</div>
            </div>
          </div>
          <div className="label-sheet">
            <div className="title-label">Hazardous Symbols</div>
            <div className="flex-center margin symbol-wrapper">
              {label.symbols.map((elem) => showSymbol(elem))}
            </div>
            <div id="diamond" className="warning-diamond">
              Warning Diamond
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniLabel;
