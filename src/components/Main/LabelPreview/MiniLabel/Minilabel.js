import React, { useContext } from "react";
import { StateContext } from "../../../../context";
import "./MiniLabel.css";
import { Textfit } from "react-textfit";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

function MiniLabel({ label, styled }) {
  const {
    setLabel,
    setHazardousSymbols,
    setSelectedId,
    selectedId,
    labelsArray,
    setLabelsArray,
  } = useContext(StateContext);
  function selectLabel(elem) {
    if (label.id === selectedId) {
      setSelectedId(null);
      setLabel({
        id: "",
        productName: "",
        chemicalFormula: "",
        description: "",
        owner: "",
        contactInfo: "",
        date: "",
        eDate: "",
        symbols: [],
        NFPA: {
          redDiamond: "",
          blueDiamond: "",
          yellowDiamond: "",
          whiteDiamond: "",
        },
      });
      setHazardousSymbols("");
    } else {
      setSelectedId(label.id);
      setLabel(elem);
      setHazardousSymbols(elem.symbols);
    }
  }
  function deleteLabel(label) {
    setLabelsArray([...labelsArray.filter((elem) => elem.id !== label.id)]);
    setLabel({
      id: "",
      productName: "",
      chemicalFormula: "",
      description: "",
      owner: "",
      contactInfo: "",
      date: "",
      eDate: "",
      symbols: [],
      NFPA: {
        redDiamond: "",
        blueDiamond: "",
        yellowDiamond: "",
        whiteDiamond: "",
      },
    });
  }
  function showSymbol(symbol) {
    return (
      <div className="minisymbol">
        <img
          src={require(`../../../../assets/symbols/${symbol}.svg`)}
          alt="Symbol"
        />
      </div>
    );
  }

  function submit(label) {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure to delete the label?",
      buttons: [
        {
          label: "Yes, is horrible",
          onClick: () => deleteLabel(label),
        },
        {
          label: "No, but I want my money back",
        },
      ],
    });
  }

  return (
    <div className={styled ? "selectedminilabel-wrapper" : "minilabel-wrapper"}>
      <div className="minilabelOverlay">
        <div className="iconWrapper">
          <img
            className="editMe"
            src={require(`../../../../assets/extras/pencil.svg`)}
            onClick={() => selectLabel(label)}
          ></img>
        </div>
        <div className="iconWrapper">
          <img
            className="deleteMe"
            src={require(`../../../../assets/extras/trash.svg`)}
            onClick={() => submit(label)}
          ></img>
        </div>
      </div>
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
                src={require("../../../../assets/NFPAsymbols/NFPA_704.svg")}
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
