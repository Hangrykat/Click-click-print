import React, { useContext } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { StateContext } from "../../../context";
import TextInput from "./TextInput/TextInput";
import "./Input.css";
import "../../../shared-styles.css";
import { easing } from "@material-ui/core";

function Input() {
  const { setHazardousSymbols, hazardousSymbols, label, setLabel } = useContext(
    StateContext
  );
  const healthHazardIndex = [
    "0-Normal material",
    "1-Slightly hazardous",
    "2-Hazardous",
    "3-Extreme danger",
    "4-Deadly",
  ];
  const flammabilityIndex = [
    "0-Will not burn",
    "1-Ignites when preheated",
    "2-Ignites with moderate heating",
    "3-Ignites under normal temperature conditions",
    "4-Very flamable",
  ];
  const instabilityIndex = [
    "0-Normal stable",
    "1-Not stable if heated",
    "2-Violente chemical change, but doesn't detonate",
    "3-May detonate with shock or heat",
    "4-May detonate under normal conditions",
  ];
  const specialNotice = [
    "OX-Oxidizer",
    "W-Reacts with water",
    "SA-Simple asphyxiant gas",
    "ACID-acid",
    "ALK-alkaline",
    "COR-corrosive",
    "BIO-Biological hazard",
    "RAD-radioactive",
  ];

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
              <div className="input-field">
                <TextInput />
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
                <div>NFPA 704 Diamond</div>
                <div className="NFPA-Diamond-input">
                  <div className="color-diamond-wrapper">
                    <img
                      src={require("../../../assets/symbols/redDiamond.svg")}
                      alt="redDiamond"
                    ></img>
                    <Dropdown
                      options={flammabilityIndex}
                      placeholder="Flammability Index"
                      onChange={(e) =>
                        setLabel({
                          ...label,
                          NFPA: {
                            ...label.NFPA,
                            redIndex: e.value[0],
                          },
                        })
                      }
                      value={""}
                    />
                  </div>
                  <div className="color-diamond-wrapper">
                    <img
                      src={require("../../../assets/symbols/blueDiamond.svg")}
                      alt="blueDiamond"
                    ></img>
                    <Dropdown
                      options={healthHazardIndex}
                      placeholder="Health Hazard"
                      onChange={(e) =>
                        setLabel({
                          ...label,
                          NFPA: {
                            ...label.NFPA,
                            blueIndex: e.value[0],
                          },
                        })
                      }
                      value={""}
                    />
                  </div>
                  <div className="color-diamond-wrapper">
                    <img
                      src={require("../../../assets/symbols/yellowDiamond.svg")}
                      alt="yellowDiamond"
                    ></img>
                    <Dropdown
                      options={instabilityIndex}
                      placeholder="Inestability Index"
                      onChange={(e) =>
                        setLabel({
                          ...label,
                          NFPA: {
                            ...label.NFPA,
                            yellowIndex: e.value[0],
                          },
                        })
                      }
                      value={""}
                    />
                  </div>
                  <div className="color-diamond-wrapper">
                    <img
                      src={require("../../../assets/symbols/whiteDiamond.svg")}
                      alt="whiteDiamond"
                    ></img>
                    <Dropdown
                      options={specialNotice}
                      placeholder="Specific Hazard"
                      onChange={(e) =>
                        setLabel({
                          ...label,
                          NFPA: {
                            ...label.NFPA,
                            whiteIndex: e.value.slice(0, e.value.indexOf("-")),
                          },
                        })
                      }
                      value={""}
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
