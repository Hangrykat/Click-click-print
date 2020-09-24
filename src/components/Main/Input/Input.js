import React, { useContext } from "react";
import CustomDateInput from "../CustomUI/CustomDateInput";
import CustomTextInput from "../CustomUI/CustomTextInput";

import { StateContext } from "../../../context";

import "./Input.css";
import "../../../shared-styles.css";

function Input() {
  const { setHazardousSymbols, hazardousSymbols, label, setLabel } = useContext(
    StateContext
  );
  function handleSymbols(symbol) {
    if (hazardousSymbols.includes(symbol)) {
      setHazardousSymbols(
        hazardousSymbols.filter((symbols) => symbols !== symbol)
      );
      setLabel({
        ...label,
        symbols: hazardousSymbols.filter((symbols) => symbols !== symbol),
      });
    } else {
      setHazardousSymbols([...hazardousSymbols, symbol]);
      setLabel({ ...label, symbols: [...hazardousSymbols, symbol] });
    }
  }

  return (
    <div className="panel-container">
      <div className="main-bg-wrapper">
        <form id="label-info" className="secondary-bg-wrapper">
          <div className="title-big">Step 1: Enter label information</div>
          <div className="input-panel-wrapper">
            <div className="input-panel">
              <div className="title-mid">About Product</div>
              <div className="input-field-wrapper">
                <CustomTextInput
                  name="product"
                  label="Product name"
                  onChange={(e) =>
                    setLabel({ ...label, productName: e.target.value })
                  }
                />
                <CustomTextInput
                  name="formula"
                  label="Chemical formula"
                  onChange={(e) =>
                    setLabel({ ...label, chemicalFormula: e.target.value })
                  }
                />
                <CustomTextInput
                  name="description"
                  label="Description"
                  line="multiline"
                  rows="3"
                  onChange={(e) =>
                    setLabel({ ...label, description: e.target.value })
                  }
                />
                <CustomTextInput
                  name="owner"
                  label="Name/ID number"
                  onChange={(e) =>
                    setLabel({ ...label, owner: e.target.value })
                  }
                />
                <CustomTextInput
                  name="contactInfo"
                  label="Contact info"
                  onChange={(e) =>
                    setLabel({ ...label, contactInfo: e.target.value })
                  }
                />
                <div className="flex-wrapper">
                  <div className="flex-grow">
                    <CustomDateInput
                      name="date"
                      label="Date"
                      onChange={(e) =>
                        setLabel({ ...label, date: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex-grow">
                    <CustomDateInput
                      name="eDate"
                      label="Possible expiry date"
                      onChange={(e) =>
                        setLabel({ ...label, eDate: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="input-panel">
              <div className="input-field">
                <div className="single-line-input">
                  <p>Choose symbols:</p>
                </div>
                <div className="choose-symbols-wrapper">
                  <div className="chooseSymbol">
                    <img
                      className="previewSymbols"
                      src={require("../../../assets/symbols/explosive.jpg")}
                      alt="explosive"
                      onClick={() => handleSymbols("explosive")}
                    />
                  </div>
                  <div className="chooseSymbol">
                    <img
                      className="previewSymbols"
                      src={require("../../../assets/symbols/corrosive.jpg")}
                      alt="corrosive"
                      onClick={() => handleSymbols("corrosive")}
                    />
                  </div>
                  <div className="chooseSymbol">
                    <img
                      className="previewSymbols"
                      src={require("../../../assets/symbols/flammable.jpg")}
                      alt="flammable"
                      onClick={() => handleSymbols("flammable")}
                    />
                  </div>
                  <div className="chooseSymbol">
                    <img
                      className="previewSymbols"
                      src={require("../../../assets/symbols/environmentdanger.jpg")}
                      alt="environment danger"
                      onClick={() => handleSymbols("environmentdanger")}
                    />
                  </div>
                  <div className="chooseSymbol">
                    <img
                      className="previewSymbols"
                      src={require("../../../assets/symbols/toxic.jpg")}
                      alt="toxic"
                      onClick={() => handleSymbols("toxic")}
                    />
                  </div>
                  <div className="chooseSymbol">
                    <img
                      className="previewSymbols"
                      src={require("../../../assets/symbols/oxidationdanger.jpg")}
                      alt="oxidation"
                      onClick={() => handleSymbols("oxidationdanger")}
                    />
                  </div>
                  <div className="chooseSymbol">
                    <img
                      className="previewSymbols"
                      src={require("../../../assets/symbols/healthhazard.jpg")}
                      alt="health Hazard"
                      onClick={() => handleSymbols("healthhazard")}
                    />
                  </div>
                  <div className="chooseSymbol">
                    <img
                      className="previewSymbols"
                      src={require("../../../assets/symbols/warning.jpg")}
                      alt="warning"
                      onClick={() => handleSymbols("warning")}
                    />
                  </div>
                  <div className="chooseSymbol">
                    <img
                      className="previewSymbols"
                      src={require("../../../assets/symbols/compressedgas.jpg")}
                      alt="compressed gas"
                      onClick={() => handleSymbols("compressedgas")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Input;
