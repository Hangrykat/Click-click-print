import React, { useContext } from "react";
import { StateContext } from "../../../../context";
import "../LabelPreview.css";

function AddLabel() {
  const {
    setLabel,
    setLabelsArray,
    labelsArray,
    setSelectedId,
    refInput,
  } = useContext(StateContext);
  const emptylabel = {
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
  };
  function addLabelhandle() {
    const foundEmpty = labelsArray.find(({ id }) => id === "");
    if (foundEmpty) {
      setSelectedId("");
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
    } else {
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
      setLabelsArray([...labelsArray, emptylabel]);
      setSelectedId("");
    }
    refInput.current.focus();
  }

  return (
    <div className="addlabel-wrapper">
      <img
        className="addLabel"
        src={require("../../../../assets/extras/add.svg")}
        alt="addsymbol"
        onClick={addLabelhandle}
      ></img>
    </div>
  );
}

export default AddLabel;
