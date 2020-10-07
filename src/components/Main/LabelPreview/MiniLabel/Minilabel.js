import React, { useContext } from "react";
import { StateContext } from "../../../../context";
import "../LabelPreview.css";
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
    setHazardousSymbols("");
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
          label: "Yes",
          onClick: () => deleteLabel(label),
        },
        {
          label: "No",
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
            alt="editMe"
            src={require(`../../../../assets/extras/pencil.svg`)}
            onClick={() => selectLabel(label)}
          ></img>
        </div>
        <div className="iconWrapper">
          <img
            alt="deleteMe"
            className="deleteMe"
            src={require(`../../../../assets/extras/trash.svg`)}
            onClick={() => submit(label)}
          ></img>
        </div>
      </div>
      <div className="minilabel">
        <div className="flex-center">
          <Textfit mode="multi" className="minititle-blackBG">
            {label.productName} ({label.chemicalFormula})
          </Textfit>
        </div>
        <div className="miniContainer">
          <div className="minidescription-container">
            <div className="minigrid1">Name/ID:</div>
            <div className="minigrid2">Contact:</div>
            <div className="minigrid3">Description:</div>
            <div className="minigrid4">Date:</div>
            <div className="minigrid5">Expiry Date:</div>
            <div className="minigrid6">{label.owner}</div>
            <div className="minigrid7">{label.contactInfo}</div>
            <div className="minigrid8 word-wrap"></div>
            <div className="minigrid9">{label.date}</div>
            <div className="minigrid10">{label.eDate}</div>
          </div>
          <div id="diamond" className="miniwarning-diamond">
            <div className="minidiamond-wrapper">
              <img
                className="miniNFPA"
                src={require("../../../../assets/NFPAsymbols/NFPA_704.svg")}
                alt="NFPA 704 symbol"
              ></img>
            </div>
          </div>
        </div>
        <div className="flex-center minisymbol-wrapper">
          {label.symbols ? label.symbols.map((elem) => showSymbol(elem)) : ""}
        </div>
      </div>
    </div>
  );
}

export default MiniLabel;
